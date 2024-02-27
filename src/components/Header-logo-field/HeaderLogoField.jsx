import React from 'react'
import './header-logo-field.css'
import logo from '../../img/Header-logo.png'

export default function HeadeLogoField() {
  return (
    <div className="header-logo-field">
        <a href="">
          <img src={logo} alt="" />
        </a>
    </div>
  )
}
