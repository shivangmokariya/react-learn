// import { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { storeContext } from '../../contex/storContext'
// import { addToCart,cartItems, removeFromCart } from '../../store/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';

// function FoodItem({id,name,price,description,image}) {
//   const dispatch = useDispatch();

//   // const {cartItems,addToCart,removeFromCart}= useContext(storeContext);
//   const cartItems = useSelector((state) => state.cart.cartItems); 
//   console.log(cartItems);

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt='' />
//         {
//           !cartItems[id] ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
//           :<div className='food-item-counter'>
//             <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
//             <p>{cartItems[id]}</p>
//             <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
//           </div>
//         }
//       </div>
//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//             <p>{name}</p>
//             <img src={assets.rating_starts} alt=''/>
//         </div>
//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem

import { useDispatch, useSelector } from 'react-redux';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { addToCart, removeFromCart } from '../../store/slices/cartSlice';

function FoodItem({ id, name, price, description, image }) {
  const dispatch = useDispatch();

  // Get cartItems from Redux state
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt='' />
        {
          !cartItems[id] ?
          <img className='add' onClick={() => dispatch(addToCart(id))} src={assets.add_icon_white} alt='' />
          :
          <div className='food-item-counter'>
            <img onClick={() => dispatch(removeFromCart(id))} src={assets.remove_icon_red} alt='' />
            <p>{cartItems[id]}</p>
            <img onClick={() => dispatch(addToCart(id))} src={assets.add_icon_green} alt='' />
          </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
