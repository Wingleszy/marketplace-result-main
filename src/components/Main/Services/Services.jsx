import React from 'react'
import './services.css'
import { Link, NavLink } from 'react-router-dom'

export default function Services() {


  return (
    <div className='services'>
        <div className='services_title'>
            <h2>Услуги</h2>
        </div>
        <div className='services-grid'>
        
            <a className='services-grid__items services-grid__items_agro'>
            <NavLink to={`/agroStore`}>
              <div className='services-grid__items-holder'>
              
                <div className='services-grid__items-title'>Агро</div>
                
              </div>
              </NavLink>
            </a>
        
            <a className='services-grid__items services-grid__items_hotel'>
            <div className='services-grid__items-holder-end'>
                <div className='services-grid__items-title-end'>Гостиница</div>
              </div>
            </a>
            <a className='services-grid__items services-grid__items_profcom'>
            <div className='services-grid__items-holder-end'>
                <div className='services-grid__items-title-end'>Профком</div>
              </div>
            </a>
            <a className='services-grid__items services-grid__items_university'>
            <div className='services-grid__items-holder'>
                <div className='services-grid__items-title'></div>
              </div>
            </a>
            <a className='services-grid__items services-grid__items_vet'> n
            <div className='services-grid__items-holder-end'>
                <div className='services-grid__items-title'>Услуги ветеринарного центра</div>
              </div>
            </a>
            <a className='services-grid__items services-grid__items_carshcool'>
            <div className='services-grid__items-holder'>
                <div className='services-grid__items-title'>Автошкола</div>
              </div>
            </a>
            <a className='services-grid__items services-grid__items_logo'>
            <div className='services-grid__items-holder'>
                <div className='services-grid__items-title'></div>
              </div>
            </a>
        </div>

        <div className="services-list">
        <NavLink to={`/agroStore`}>
          <a href="" className="services-list-link"> 
          
            <div className="services-list-link-bg">
              <h3>Агро</h3>
            </div>
          
          </a>
          </NavLink>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3>Гостиница</h3>
            </div>
          </a>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3>Профком</h3>
            </div>
          </a>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3></h3>
            </div>
          </a>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3>Услуги ветеринарного центра</h3>
            </div>
          </a>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3>Автошкола</h3>
            </div>
          </a>
          <a href="" className="services-list-link">
            <div className="services-list-link-bg">
              <h3>Агро</h3>
            </div>
          </a>
        </div>
    </div>
  )
}
