import React from 'react'

export const RegistrationForm = () => {
  return (
    <div className="registration__container">
        <form action="" className='registration__form'>
            <h2>Форма регистрации</h2>
            <input type="text" className='registration__input' placeholder='Имя'/>
            <input type="text" className='registration__input' placeholder='Фамилия'/>
            <input type="email" className='registration__input' placeholder='Почта'/>
            <input type="tel" className='registration__input' placeholder='Номер телефона'/>
            <input type="submit" className='registration__submit' value='ЗАРЕГИСТРИРОВАТЬСЯ'/>
        </form>
    </div>
  )
}
