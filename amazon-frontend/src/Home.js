import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
<div className="home__container">
<img className="home__img" src="https://i.ytimg.com/vi/mKk-HBmjFEQ/maxresdefault.jpg" alt="PRime_ad"/>
<div className="home__row">
<Product title="This is a test title to check the design interface of my clone" price={20} rating={4} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
<Product title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
</div>

<div className="home__row">
<Product title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
<Product title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
<Product title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
</div>

<div className="home__row">
<Product title="This is a test title to check the design interface of my clone" price={20} rating={3} url="http://mattragland.com/wp-content/uploads/2013/01/final-cover-1.png"/>
</div>



</div>		</div>
	)
}

export default Home