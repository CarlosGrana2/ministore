import React from 'react';
import btnAddToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';
import Image from 'next/image';
const ProductInfo = ({ product, setToggleProduct, handleClick }) => {

	const addToCartAndClose = () => {
		handleClick(product);
		setToggleProduct(false);
	};
	return (
		<>
			<Image src={product.images[0]} alt={product.name} className={styles.product} width="100%" height="100%" />
			<div className={styles.ProductInfo}>
				<p>${product.price}</p>
				<p>{product.name}</p>
				<p>{product.description}</p>
				<button
					className={styles['primary-button add-to-cart-button']}
					onClick={addToCartAndClose}
				>
					<Image src={btnAddToCart} alt="add to cart" />
					Add to cart
				</button>
			</div>
		</>
	);
};

export default ProductInfo;