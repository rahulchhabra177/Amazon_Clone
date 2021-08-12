import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from './StateProvider'

function Checkout() {
const [{basket},dispatch]=useStateValue();
	return (
		<div className="checkout">
<div className="checkout__left">
<img className="checkout__ad" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_" alt="advert"/>
<h2 className="checkout__title">Your Shopping Basket</h2>
<CheckoutProduct title="This is a test title to check and it s sjfhdkfdf fgjdfg dfsdlkj d the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>

{basket.map(item=>(
	<CheckoutProduct title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>

	))}

</div>

<div className="checkout__right">
<Subtotal/>
</div>
		</div>
	)
}

export default Checkout