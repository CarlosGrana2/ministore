import React from 'react';
import ProductInfo from '@components/ProductInfo.jsx';
import close from '@icons/icon_close.png';
import Image from 'next/image';
import styles from '@styles/ProductDetail.module.scss';

const ProductDetail = ({ product, setToggleProduct, handleClick }) => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']} onClick={() => setToggleProduct(false)} aria-hidden="true">
        <Image src={close} alt="close" />
      </div>
      <ProductInfo product={product} setToggleProduct={setToggleProduct} handleClick={handleClick} />
    </aside>
  );
};

export default ProductDetail;
