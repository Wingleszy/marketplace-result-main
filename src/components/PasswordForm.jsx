import React, { useState } from 'react';

export const PasswordForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://itres26.ru/api/registr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password, confirmPassword }),
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
        <h2 className='password__form__name'>Защитите свой аккаунт</h2>
        <h4>придумайте логин и пароль</h4>
        <input
          type="text"
          className='registration__input'
          placeholder='Логин'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          className='registration__input'
          placeholder='Пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className='registration__input'
          placeholder='Подтверждение пароля'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" className='registration__submit' value='СОХРАНИТЬ'/>
      </form>
    </div>
  );
};