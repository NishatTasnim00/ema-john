import React from 'react';
import "./Product.css"
const Product = (props) => {
	console.log(props);
	const { name, seller, price, img, ratings } = props.product;
	console.log(img);
	return (
		<div className="product-container">
			<img src={img} alt="" />
			<div className='product-details'>
				<div>
					<h3 className="name">{name}</h3>
					<p className="price">Price: ${price}</p>
				</div>
				<div>
					<h6>Manufacturer : {seller}</h6>
					<h6>Rating : {ratings}</h6>
				</div>
			</div>
            <button className="btn-cart">Add to Cart</button>
		</div>
	);
};

export default Product;
