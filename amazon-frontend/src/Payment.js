import React from 'react'
import "./Payment.css"
import {Link} from "react=router-dom"
import CheckoutProduct from "./CheckoutProduct"
import {useStateValue} from "./StateProvider"
function Payment() {
	const [{basket,user},dispatch]=useStateValue();
	return (
		<div className="payment">
			<div className="payment__container">
<h1>

Checkout( <Link to="/checkout">{basket?.length} items </Link>)
</h1>


<div className="payment__section">
<div className="payment__title">
<h3>DeliveryAddress</h3>
</div>

<div className="payment__address"></div>


</div>
<div className="payment__section"></div>


			</div>






		</div>
	)
}

export default Payment