import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Button, IconButton, Card } from 'react-native-paper';

const Registration = ({ navigateTo }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Валидация email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Валидация пароля
  const validatePassword = (password) => {
    return password.length >= 6; // Пароль должен быть не менее 6 символов
  };

  // Валидация даты рождения
  const validateDateOfBirth = (date) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/; // Формат DD.MM.YYYY
    return regex.test(date);
  };

  // Обработка регистрации
  const handleRegistration = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'Имя обязательно';
    }

    if (!lastName) {
      newErrors.lastName = 'Фамилия обязательна';
    }

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!password || !validatePassword(password)) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (!confirmPassword || password !== confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    if (!dateOfBirth || !validateDateOfBirth(dateOfBirth)) {
      newErrors.dateOfBirth = 'Введите дату в формате DD.MM.YYYY';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Если ошибок нет, регистрируем пользователя
    setErrors({});
    Alert.alert('Успешно', 'Регистрация прошла успешно!');
    console.log({
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Регистрация</Text>

        {/* Имя */}
        <TextInput
          style={[styles.input, errors.firstName && styles.inputError]}
          placeholder="Имя"
          value={firstName}
          onChangeText={(text) => {
            setFirstName(text);
            setErrors((prev) => ({ ...prev, firstName: '' }));
          }}
        />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

        {/* Фамилия */}
        <TextInput
          style={[styles.input, errors.lastName && styles.inputError]}
          placeholder="Фамилия"
          value={lastName}
          onChangeText={(text) => {
            setLastName(text);
            setErrors((prev) => ({ ...prev, lastName: '' }));
          }}
        />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

        {/* Email */}
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Пароль */}
        <View style={[styles.passwordContainer, errors.password && styles.inputError]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Пароль"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors((prev) => ({ ...prev, password: '' }));
            }}
            secureTextEntry={!showPassword}
          />
          <IconButton
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconButton}
          />
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        {/* Подтверждение пароля */}
        <View style={[styles.passwordContainer, errors.confirmPassword && styles.inputError]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              setErrors((prev) => ({ ...prev, confirmPassword: '' }));
            }}
            secureTextEntry={!showConfirmPassword}
          />
          <IconButton
            icon={showConfirmPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.iconButton}
          />
        </View>
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

        {/* Дата рождения */}
        <TextInput
          style={[styles.input, errors.dateOfBirth && styles.inputError]}
          placeholder="Дата рождения (DD.MM.YYYY)"
          value={dateOfBirth}
          onChangeText={(text) => {
            setDateOfBirth(text);
            setErrors((prev) => ({ ...prev, dateOfBirth: '' }));
          }}
          keyboardType="numeric"
        />
        {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}

        {/* Кнопка регистрации */}
        <Button mode="contained" onPress={handleRegistration} style={styles.button}>
          Зарегистрироваться
        </Button>

        {/* Ссылка на вход */}
        <Button onPress={() => navigateTo('login')} style={styles.link}>
          Уже есть аккаунт? Войдите
        </Button>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    margin: 0,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Registration;