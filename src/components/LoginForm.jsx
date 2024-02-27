import React, { useState } from 'react';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://itres26.ru/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      await alert(data.message)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="registration__container">
      <form action="" className='registration__form' onSubmit={handleSubmit}>
        <h2 className='password__form__name'>Авторизация</h2>
        <input
          type="text"
          className='registration__input'
          placeholder='Логин'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          className='registration__input'
          placeholder='Пароль'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" className='registration__submit' value='СОХРАНИТЬ'/>
      </form>
    </div>
  );
};