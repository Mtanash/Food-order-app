import styles from "../styles/components/Meal.module.css";
import Card from "../ui/Card";
import IconButton from "../ui/IconButton";
import { AiOutlinePlus } from "react-icons/ai";
import truncateString from "../helpers/truncateString";
import toastNotify from "../helpers/toast";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";
import useAmount from "../hooks/useAmount";
import MealAmountInput from "../ui/MealAmountInput";

function Meal({ _id: id, name, description, picture, price }) {
  const { mealAmount, handleMealAmountChange, handleMealAmountButtonClick } =
    useAmount();

  const dispatch = useDispatch();

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

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

    dispatch(addItemToCart(item));
    toastNotify("Meal added to cart!");
  };

  return (
    <animated.div style={props}>
      <Card className={styles.meal}>
        <Link to={`/meals/${id}`}>
          <img src={picture} alt={name} />
          <h3 className={styles.mealName}>{truncateString(name, 25)}</h3>
        </Link>
        <p className={styles.mealDescription}>{truncateString(description)}</p>
        <p className={styles.mealPrice}>${price.toFixed(2)}</p>
        <div className={styles.mealAddSection}>
          <MealAmountInput
            mealAmount={mealAmount}
            handleMealAmountChange={handleMealAmountChange}
            handleMealAmountButtonClick={handleMealAmountButtonClick}
          />
          <IconButton
            Icon={AiOutlinePlus}
            label="Add"
            onClick={handleAddMealToCart}
          />
        </div>
      </Card>
    </animated.div>
  );
}

export default Meal;
