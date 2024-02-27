import React, { useContext } from 'react'
import logo from '../img/agrarniyLogo.png'
import moreImg from '../img/Vector (1).svg'
import searchImg from '../img/Vector (2).svg'
import accountImg from '../img/Vector (3).svg'
import likesImg from '../img/Vector (4).svg'
import basketImg from '../img/Vector (5).svg'
import { Link } from 'react-router-dom'
import { customContext } from './Context'

export const StyledHeader = () => {

    const {basket} = useContext(customContext)

  return (
    <header className='header__styled'>
        <Link to="/" className="header__logo">
            <img src={logo} alt="" className="logo__img" />
        </Link>
        <div className="header__content">
            <img src={moreImg} alt="" className='header__more'/>
            <div className="header__wrap">
            <input type="text" name="" id="" className='header__search' placeholder='Поиск'/>
            <img src={searchImg} alt="" className='header__search_btn'/>
            </div>
            <div className="header__links">
            <div className="header__account">
                <img src={accountImg} alt="" className="header__account_img"/>
                <div className="header__account_wrap">
                    <span className='header__account_desc'>Учетная</span>
                    <br />
                    <span className='header__account_desc_second-line'>Запись</span>
                </div>
            </div>
            <div className="header__likes">
                <img src={likesImg} alt="" />
                <div><span>1</span></div>
            </div>
            <Link to={"/basket"} className="header__cart">
                <img src={basketImg} alt="" />
                <div><span>{basket.length}</span></div>
            </Link>
            </div>
        </div>
    </header>
  )
}
