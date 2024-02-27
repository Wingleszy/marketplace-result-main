import React, { useContext } from 'react'
import { StyledHeader } from './StyledHeader'
import arrow from '../img/Arrow - Left.svg'
import carrot from '../img/image 2.png'
import { Link, useLocation } from 'react-router-dom'
import { customContext } from './Context'
import { BasketItem } from './BasketItem'
import Footer from "./Footer/Footer";

export const BasketList = () => {

    const location = useLocation()

    
    const {basket, removeProduct} = useContext(customContext)
    let total = 0

  return (
    <>
        <StyledHeader/>
        <div className="basket__container">
            <div className="basket">
                <div className="basket__head">
                    <h2><Link to="/agroStore"><img src={arrow} alt="" /></Link>Корзина</h2>
                    <h5>Товаров в корзине: {basket.length}</h5>
                </div>

                {basket.map((item, index) => {
                    total += +item.price
                    return <BasketItem key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} removeProduct={removeProduct} weight={item.weight} setWeight={item.setWeight} />
                })}
                 <div className="basket__submit">
                    <div className="basket__submit__price">
                        <span>Итого</span>
                        <h3>{total} ₽</h3>
                    </div>
                    <button>Оформить заказ</button>
                 </div>
            </div>
        </div>
        <Footer />
    </>
  )
}
