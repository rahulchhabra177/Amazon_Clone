import React from 'react'
import "./Product.css";
import {useStateValue} from './StateProvider'
function Product({title,price,rating,url}) {
	const [{basket},dispatch]=useStateValue();
	const addToBasket=()=>{
		//dispatch item to data layer
		dispatch({
			type:"ADD_TO_BASKET",
			item:{
			title:title,
			price:price,
			rating:rating,
			url:url
		}
		});
	console.log("Lodooo",basket)

	}

	return (
		<div className="product">
<div className="product__info">

<p>{title}</p>
<p className="product__price">
<small>$</small>
<strong>{price}</strong>
</p>
<div className="product__rating">
{
	Array(rating).fill().map((_,i)=>(
	<p>⭐</p>
))
}



</div>

</div>			


<img src={url} alt="product__img" className="product__image"/>
<button onClick={addToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product