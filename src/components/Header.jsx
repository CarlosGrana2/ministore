import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@components/MobileMenu.jsx';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
import AppContext from '@context/AppContext';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggleDesktop, setToggleDesktop] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleClickDesktop = () => {
    setToggleDesktop(!toggleDesktop);
  };

  const handleClickMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const verifyCart = (cartNumber) => {
    if (cartNumber && cartNumber > 9) {
      return '+9';
    } else {
      return cartNumber;
    }
  };
  return (
    <nav className={styles.Nav}>
      <div className={styles.menu}>
        <Image src={menu} alt="logo" onClick={handleClickMobile} role="presentation" />
      </div>
      <div className={styles['navbar-left']}>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/"> All </Link>
          </li>
          <li>
            <Link href="/"> Clothes </Link>
          </li>
          <li>
            <Link href="/"> Electronics </Link>
          </li>
          <li>
            <Link href="/"> Furnitures </Link>
          </li>
          <li>
            <Link href="/"> Toys </Link>
          </li>
          <li>
            <Link href="/"> Others </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={() => handleClickDesktop} role="presentation">
            cgranadosmontenegro
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)} role="presentation">
            <Image src={shoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
          </li>
        </ul>
      </div>
      {toggleDesktop && <Menu />}
      {toggleMobile && <MobileMenu />}
      {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders} />}
    </nav>
  );
};

export default Header;
