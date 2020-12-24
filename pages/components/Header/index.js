import React from 'react'
import Styles from './Header.module.css';
import Link from 'next/link';
import 'antd/dist/antd.css'; 
import {MenuOutlined} from '@ant-design/icons';

const Header = () => {
    return (
        <div className={Styles.wrapper}>
            <div>
             Logo
            </div>
              <div className={Styles.navWrapper}>
                  <Link href='#'><a>Home</a></Link>
                  <Link href='#'><a>About Us</a></Link>
                  <Link href='#'><a>Post Event</a></Link>
                  <Link href='#'><a>Contact Us</a></Link>
                  <div className={Styles.menuWrapper}>
                  <MenuOutlined  className={Styles.menuIcon}/>
                  </div>
              </div>
        </div>
    )
}

export default Header;