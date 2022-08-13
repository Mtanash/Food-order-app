import styles from "../styles/components/Meal.module.css";
import Card from "../ui/Card";
import IconButton from "../ui/IconButton";
import { AiOutlinePlus } from "react-icons/ai";
import truncateString from "../helpers/truncateString";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { toast } from "react-toastify";

function Meal({ id, name, description, picture, price }) {
  const notifyMealAddedToCart = () =>
    toast.success("Meal added to cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const [mealAmount, setMealAmount] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  const handleMealAmountChange = (e) => {
    setMealAmount(e.target.value);
  };

  const handleAddMealToCart = () => {
    const item = {
      data: {
        id,
        name,
        description,
        price,
        picture,
      },
      amount: +mealAmount,
    };

    addItemToCart(item);
    notifyMealAddedToCart();
  };

  return (
    <Card className={styles.meal}>
      <img src={picture} alt={name} />
      <h3 className={styles.mealName}>{name}</h3>
      <p className={styles.mealDescription}>{truncateString(description)}</p>
      <p className={styles.mealPrice}>${price.toFixed(2)}</p>
      <div className={styles.mealAddSection}>
        <div className={styles.mealAmount}>
          <label htmlFor="number" defaultValue="1">
            Amount
          </label>
          <input
            type="number"
            id="number"
            value={mealAmount}
            onChange={handleMealAmountChange}
          />
        </div>
        <IconButton
          Icon={AiOutlinePlus}
          label="Add"
          onClick={handleAddMealToCart}
        />
      </div>
    </Card>
  );
}

export default Meal;
