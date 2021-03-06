import React, { useEffect, useState } from 'react'
import Styles from './Header.module.css';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { MenuOutlined } from '@ant-design/icons';
import Image from'next/image';
const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    useEffect(() => {
        window.addEventListener('resize', navbarUpdate)
    }, [])


    const navbarUpdate = () => {
        console.log(window.innerWidth)
        if (window.innerWidth < 750) {
            setShowMenu(false)
        } else {
            setShowMenu(true)
        }
    }

    const closeNavbarHandler = () => {
        console.log(showMenu)
        if (showMenu === false) {
            setShowMenu(true)
        }
        else {
            setShowMenu(false)
        }


    }
    return (
        <React.Fragment>
        <div className={Styles.wrapper}>
            <div>
                Logo
            </div>
            {showMenu ? <div className={Styles.navWrapper}>
                <Link href='#'><a>Home</a></Link>
                <Link href='#'><a>About Us</a></Link>
                <Link href='#'><a>Post Event</a></Link>
                <Link href='#'><a>Contact Us</a></Link>
                <Link href='#'><a>Article</a></Link>

            </div> : null}

            <div className={Styles.menuWrapper} onClick={closeNavbarHandler}>
                <MenuOutlined className={Styles.menuIcon} />
            </div>
        </div>
          <div className={Styles.imageWrapper}>
              <Image className={Styles.mainImage} src='/main.jpg' layout='responsive' width={1200} height={400}/>
          </div>
        </React.Fragment>
    )
}

export default Header;