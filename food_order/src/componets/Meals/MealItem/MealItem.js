import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContex from "../../../store/cart-contex";

const MealItem = (props) => {
  const cartctx=useContext(CartContex);
  const price = `$${props.price.toFixed(2)}`;

  const AddToCartHandler=amount=>{
cartctx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.discription}>{props.discription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
