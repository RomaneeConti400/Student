import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Button, IconButton, Card } from 'react-native-paper';

const Login = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  // Обработка входа
  const handleLogin = () => {
    const newErrors = {};

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!password || !validatePassword(password)) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Если ошибок нет, выполняем вход
    setErrors({});
    Alert.alert('Успешно', 'Вход выполнен!');
    console.log({ email, password });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Вход</Text>

        {/* Поле email */}
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: '' })); // Сбрасываем ошибку при изменении текста
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Поле пароля */}
        <View style={[styles.passwordContainer, errors.password && styles.inputError]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Пароль"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setErrors((prev) => ({ ...prev, password: '' })); // Сбрасываем ошибку при изменении текста
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

        {/* Кнопка входа */}
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Войти
        </Button>

        {/* Ссылка на регистрацию */}
        <Button onPress={() => navigateTo('registration')} style={styles.link}>
          Нет аккаунта? Зарегистрируйтесь
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

export default Login;