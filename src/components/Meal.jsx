import styles from "../styles/components/Meal.module.css";
import Card from "../ui/Card";
import IconButton from "../ui/IconButton";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFileArrowUpFill, BsFileArrowDownFill } from "react-icons/bs";
import truncateString from "../helpers/truncateString";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import toastNotify from "../helpers/toast";

function Meal({ _id, name, description, picture, price }) {
  const [mealAmount, setMealAmount] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  const handleMealAmountChange = (e) => {
    if (+e.target.value < 1) {
      setMealAmount(1);
    } else {
      setMealAmount(+e.target.value);
    }
  };

  const handleMealAmountButtonClick = (amount) => {
    if (amount === -1) {
      if (mealAmount < 2) {
        setMealAmount(1);
      } else {
        setMealAmount((prev) => prev - 1);
      }
    } else if (amount === 1) {
      setMealAmount((prev) => prev + 1);
    } else {
      console.log("Please provide amount = -1 or 1");
      return;
    }
  };

  const handleAddMealToCart = () => {
    const item = {
      data: {
        id: _id,
        name,
        description,
        price,
        picture,
      },
      amount: +mealAmount,
    };

    addItemToCart(item);
    toastNotify("Meal added to cart!");
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
          <button onClick={() => handleMealAmountButtonClick(-1)}>
            <BsFileArrowDownFill />
          </button>
          <input
            type="number"
            id="number"
            value={mealAmount}
            onChange={handleMealAmountChange}
          />
          <button onClick={() => handleMealAmountButtonClick(1)}>
            <BsFileArrowUpFill />
          </button>
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
