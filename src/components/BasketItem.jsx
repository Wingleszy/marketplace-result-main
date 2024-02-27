import React, { useState } from 'react'
import trash from '../img/trash.svg'

export const BasketItem = (props) => {
    const { img, name, price, removeProduct, id, weight, setWeight } = props
    const [weightItem, setWeightItem] = useState(weight)
    return (
        <div className="basket__item">
            <img src={img} alt="" className='basket__item_logo' />
            <div className="basket__item__desc">
                <h6>{name}</h6>
                <span>{price} ₽</span>
                <div className="basket__item__count">
                    <button onClick={() => setWeightItem(prev => {
                        if(prev !== 0 && prev > 0) {
                           return prev - 1
                        } else {
                            return 0
                        }
                        })}>-</button>
                    <span>{weightItem} кг</span>
                    <button onClick={() => setWeightItem(prev => prev + 1)}>+</button>
                </div>
            </div>
            <div className="basket__item__control">
                <button onClick={() => removeProduct(id)}><img src={trash} alt="" /></button>
                <h3>129 ₽</h3>
            </div>
        </div>
    )
}
