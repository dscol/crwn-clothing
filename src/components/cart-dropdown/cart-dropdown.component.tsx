import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
    let history = useHistory();

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem: any) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
                }
            </div>
            <CustomButton 
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}
            >  
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default CartDropdown;