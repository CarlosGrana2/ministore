import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import Image from 'next/image';

import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const today = new Date(Date.now()).toLocaleString().split(', ')[0];
  
  return (
    <>
      <Head>
        <title> Checkout </title>{' '}
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <div className={styles['title-container']}>
            <Image src={arrow} alt="arrow" />
            <h1 className={styles.title}> My order </h1>
          </div>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span> {today} </span>
                <span>
                  
                  {state.cart.length}
                  articles
                </span>
              </p>
              <p> $ {state.total} </p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
