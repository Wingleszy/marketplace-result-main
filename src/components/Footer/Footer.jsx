import React from 'react'
import './footer.css'
import telegram from '../../img/icons/icon-telegram.svg'
import VK from '../../img/icons/icon-VK.svg'
import YouTube from '../../img/icons/icon-YouTube.svg'
import rutube from '../../img/icons/icon-rutube.svg'
import OK from '../../img/icons/icon-OK.svg'
import FooterLogo from '../../img/footer-logo.png'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-field">
            <div className="footer-grid">
                <div className="footer-wrapper">
                    <h3 className='footer-wrapper-title'>О нас</h3>
                    <p className="footer-wrapper-title-location">355035, г.Ставрополь,пер.Зоотехнический, 12.</p>
                    <p className="footer-wrapper-title-info">ФГБОУ ВО «Ставропольский государственный аграрный университет»
                        Приемная комиссия: <br />+7 (8652) 71-60-57 <br />
                        По общим вопросам: <br />+7 (8652) 35-22-82, 35-22-83 <br />
                        inf@stgau.ru
                    </p>
                </div>
                <div className="footer-wrapper">
                    <h3 className='footer-wrapper-title'>Информация</h3>
                    <ul>
                        <li> <a href="#" className="footer-wrapper-title-link">Вопросы и ответы</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Контакты</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Для поставщиков</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Политика конфиденциальности</a></li>
                    </ul> 
                </div>
                <div className="footer-wrapper  ">
                   <img src={FooterLogo} alt="" className="footer-wrapper-logo" />
                </div>
                <div className="footer-wrapper  wrapper-services">
                    <h3 className='footer-wrapper-title'>Услуги</h3>
                    <ul>
                        <li><a href="#" className="footer-wrapper-title-link">Агро</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Услуги ветеринарного центра</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Услуги в гостинице</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Мерч от профкома</a></li>
                    </ul>
                    
                    
                </div>
                <div className="footer-wrapper wrapper-icons">
                   <div className="footer-wrapper-grid">
                        <a href="#" className='icon-telegram'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src={telegram} alt="telegram" />
                            </div>
                        </a>
                        <a href="#" className='icon-VK'>
                            <div className="footer-wrapper-grid-icons">
                                <img src={VK} alt="VK" />
                            </div>
                        </a>
                        <a href="#" className=' icon-YouTube'>
                            <div className="footer-wrapper-grid-icons">
                                <img src={YouTube} alt="YouTube" />
                            </div>
                        </a>
                        <a href="#" className='icon-rutube'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src={rutube} alt="rutube" />
                            </div>
                        </a>
                        <a href="#" className='icon-OK'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src={OK} alt="OK" />
                            </div>
                        </a>
                   </div>
                </div>
            </div>
        </div>
    </footer>
  )
}