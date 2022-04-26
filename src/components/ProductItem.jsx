import React, {useContext, useState} from 'react';
import AppContext from '@context/AppContext';
import ProductDetail from '@containers/ProductDetail.jsx';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import placeholderImg from '@images/placeholder.png';
import Image from 'next/image';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({product}) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { state, addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		if(state.cart.includes(item)) {
			return;
		} else {
			addToCart(item);
		}
	};
	const verifyAdded = (item) => {
		if(state.cart.includes(item)) {
			return addedToCartImage;
		} else {
			return addToCartImage;
		}
	};

	const isUrl = (cadena) => {
		let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
		return regexp.test(cadena);
	};

	const imageWhitError = (image) => {
		if (image === '' || !isUrl(image)) {
			return placeholderImg;
		}
		return image;
	};




	return (
		<div className={styles.ProductItem}>
			<Image
				
				src={imageWhitError(product.images[0])}
				loading="lazy" alt={product.title} className={styles.productImage}
				width={200} 
				height={200} 
				layout="responsive" 
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}
						aria-hidden="true">
					<Image src={verifyAdded(product)} alt="Add to cart"/>
				</figure>
			</div>
			{toggleProduct && <ProductDetail
				product={product}
				setToggleProduct={setToggleProduct}
				handleClick={handleClick}
			/>}
		</div>
	);
};

export default ProductItem;