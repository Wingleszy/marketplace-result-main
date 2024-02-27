import React, { useState } from 'react'

import './agro.css'
import logo from '../../img/agrarniyLogo.png'
import arrow from '../../img/Vector (6).svg'
import all from '../../img/i.klb-icon-layout-grid.svg'
import apple from '../../img/Vector (7).svg'
import cucumber from '../../img/free-icon-cucumber-2346907 1.svg'
import meat from '../../img/Vector (8).svg'
import bread from '../../img/Vector (9).svg'
import cup from '../../img/cup.svg.svg'
import plant from '../../img/Vector (10).svg'
import add1 from '../../img/Rectangle 4.png'
import add2 from '../../img/Rectangle 5.png'
import add3 from '../../img/Rectangle 6.png'
import carrot from '../../img/carrot.png'
import vinograd from '../../img/Picsart_24-02-26_19-34-45-025.png'
import yabloko from '../../img/Picsart_24-02-26_19-23-18-704.png'
import grusha from '../../img/pear-fruit-isolated-on-transparent-background_191095-15033-Photoroom.png-Photoroom.png'
import cucumber1 from '../../img/cucumber-isolated_93675-131293-Photoroom.png-Photoroom.png'
import mangal from '../../img/Picsart_24-02-26_18-23-25-025.png'
import grabli from '../../img/Picsart_24-02-26_18-37-11-024.png'

import Header from '../Header/Header'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Agro() {

    const location = useLocation()

  return (
    <div className="agro__container">
        <section className="agro__section">
            <div className="agro__categories">
                <div className="agro__logo">
                    <Link to="/">
                        <img src={logo} alt="" />   
                    </Link>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={all} alt="" />
                        <h4>Все категории</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow'/>
                </div>
                <div className="agro__category">
                    <Link to="/agroStore/subAgro" className="category__logo">
                        <img src={apple} alt="" />
                        <h4>Фрукты и ягоды</h4>
                    </Link>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={cucumber} alt="" />
                        <h4>Овощи</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={meat} alt="" />
                        <h4>Meats & Seafood</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={bread} alt="" />
                        <h4>Хлеб & Выпечка</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={cup} alt="" />
                        <h4>Напитки</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={plant} alt="" />
                        <h4>Рассада</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>

            </div>
            <section className="agro__main">
                <Header />
                <div className='agro__list'>
                    <div className="agro__addvertation">
                        <div className="addvertation__card">
                            <img src={add1} alt="" />
                            <span>Название</span>
                        </div>
                        <div className="addvertation__card">
                            <img src={add2} alt="" />
                            <span>Название</span>
                        </div>
                        <div className="addvertation__card">
                            <img src={add3} alt="" />
                            <span>Название</span>
                        </div>
                    </div>
                    <div className="list__section">
                        <h5>Сезонное</h5>
                        <div className="list__cards">
                            <Link to={"/item"} state={{name: 'Морковь', img: carrot}} className="list__card">
                                <img src={carrot} alt="" />
                                <h6>Морковь</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Огурцы', img: cucumber1}} className="list__card">
                                <img src={cucumber1} alt="" />
                                <h6>Огурцы</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Мангал', img: mangal}} className="list__card">
                                <img src={mangal} alt="" />
                                <h6>Мангал</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Грабли', img: grabli}} className="list__card">
                                <img src={grabli} alt="" />
                                <h6>Грабли</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                        </div>
                    </div>

                    <div className="list__section">
                        <h5>Фрукты и ягоды</h5>
                        <div className="list__cards">
                            <Link to={"/item"} state={{name: 'Виноград кишмиш', img: vinograd}} className="list__card">
                                <img src={vinograd} alt="" />
                                <h6>Виноград кишмиш</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Яблоки красные', img: yabloko}} className="list__card">
                                <img src={yabloko} alt="" />
                                <h6>Яблоки красные</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Груши', img: grusha}} className="list__card">
                                <img src={grusha} alt="" />
                                <h6>Груши</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                        </div>
                    </div>

                </div>
                <Footer/>
            </section>
            
        </section>
    </div>
  )
}
