require('./Header.scss')
import React from 'react'
import Image from '../../components/lib/image/Image'


const Header = () => (
    <div className="Header">
      <Image className="logo" color="#ffffff" src="/static/logo.gif" />
    </div>
)


export default Header

