import React, { useContext, useState } from 'react'
import carrot from '../img/carrot.png'

import {customContext} from '../components/Context'

export const ItemDesc = (props) => {

    const {name, img } = props
    const [weight, setWeight] = useState(1)

    const {addProduct, id, setId} = useContext(customContext)




    return (
        <div className='item__container'>
            <div className="item__img">
                <img src={img} alt="" />
            </div>
            <div className="item__desc">
                <div className="item__section_bordered">
                    <h2>{name}</h2>
                    <span className='item__weight'>1 кг</span>
                </div>
                <div className="item__section_bordered">
                    <h6 className='item__head'>В 100 граммах</h6>
                    <div className="item__ccals">
                        <div className="ccals__item">
                            <h6 className='ccals__count'>43</h6>
                            <span className='ccals__name'>ккал</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>1.6г</h6>
                            <span className='ccals__name'>Белки</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>0.2г</h6>
                            <span className='ccals__name'>Жиры</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>6.8г</h6>
                            <span className='ccals__name'>Углеводы</span>
                        </div>
                    </div>
                    
                </div>
                <div className="item__section">
                    <h6 className='item__head'>Срок хранения</h6>
                    <h3 className='item__safetime'>1 Месяц</h3>
                    <span className='item__safeconditions'>При температуре от +2°С до +10°С</span>
                    <button onClick={() => {
                        addProduct({name: name, img: img, price: 129, id: id, weight: weight, setWeight: setWeight})
                        setId(prev => +prev + 1)
                        }} className='item__buy_btn'>
                        Купить
                        <span>129 за кг</span>
                    </button>
                    <div className="item__controls">
                        <button className='item__btn_default' onClick={() => setWeight(prev => {
                            if (prev !== 0 && prev > 0) {
                                return prev - 1
                            } else {
                                return 0
                            }
                        })}>-</button>
                        <div className="item__count">
                           {weight} кг
                        </div>
                        <button className='item__btn_colored' onClick={() => setWeight(prev => prev + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
