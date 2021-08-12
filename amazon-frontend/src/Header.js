import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider'
import {auth} from "./firebase"
function Header() {
	const [{basket,user},dispatch]=useStateValue();
	console.log(basket);
	console.log(user);
	const handleAuthentication=()=>{
		if (user){auth.signOut();}
	}
	return (
		<div className="header">
<Link to="/">
<img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
</Link>
			<div className="header__search">
			<input type="text" className="header__searchInput"/>

<div className="header__searchIcon">
<SearchIcon />

</div>
			</div>

<div className="header__nav">
<Link to={!user && "/login"}>
		<div className="header__option" onClick={handleAuthentication}>
					<span className="header__optionLineOne">
					Hello ,{user?.name}
					</span>
					<span className="header__optionLineTwo">
					{user?'Sign out':'Sign in'}
					</span>
		</div>
		</Link>
		<div className="header__option">
					<span className="header__optionLineOne">
					Return And
					</span>
					<span className="header__optionLineTwo">
					Orders
					</span>
		</div>
		<div className="header__option">
					<span className="header__optionLineOne">
					Your
					</span>
					<span className="header__optionLineTwo">
					Prime
					</span>
		</div>
		<div className="header__optionBasket">
<span className="header__optionLineOne">
<Link to="/checkout">
					<ShoppingCartIcon />
</Link>
					</span>
<span className="header__optionLineTwo header__optionCount">
					{basket?.length}
					</span>
		</div>


</div>





			
		</div>
	)
}

export default Header