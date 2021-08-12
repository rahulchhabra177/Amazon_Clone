import React from 'react'
import "./CheckoutProduct.css";
import {useStateValue} from './StateProvider'
function CheckoutProduct({title,price,rating,url}) {
	const [{basket},dispatch]=useStateValue();
	const removeFromBasket=()=>{
		//dispatch item to data layer
		dispatch({
			type:"REMOVE_FROM_BASKET",
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
		<div className="checkoutProduct">
		<img src={url} alt="checkoutProduct__img" className="checkoutProduct__image"/>

<div className="checkoutProduct__info">

<p className="checkoutProduct__title">{title}</p>
<p className="checkoutProduct__price">
<small>$</small>
<strong>{price}</strong>
</p>
<div className="checkoutProduct__rating">
{
	Array(rating).fill().map((_,i)=>(
	<p>*</p>
))
}



</div>

		


<button onClick={removeFromBasket}>Remove From Basket</button></div>	
		</div>
	)
}

export default CheckoutProduct