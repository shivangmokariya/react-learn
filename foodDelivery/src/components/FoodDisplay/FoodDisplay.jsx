import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { useSelector } from "react-redux";
// import { food_list } from '../../store/cartSlice';

function FoodDisplay({ category }) {
  // const { food_list } = useContext(storeContext);
  const food_list = useSelector((state) => state.cart.food_list); 

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-delivery-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
