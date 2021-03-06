import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {auth} from '../firebase/firebase-utils';
import CartIcon from './cart-icon';
import CartDropdown from './cart-dropdown'
import {selectCartHidden} from '../redux/cart/cart-selector'
import {selectCurrentUser} from '../redux/user/user-selector'

import './header.styles.scss';
import {ReactComponent as Logo} from '../assets/crown.svg';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'><Logo className='logo'/></Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT US</Link>
            { currentUser ?
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div> :
                <Link className='option' to='/auth'>Sign In</Link>
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps) (Header);