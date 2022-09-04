import { useParams } from "react-router-dom";
import { useGetMealByIdQuery } from "../slices/apiSlice";
import styles from "../styles/pages/MealPage.module.css";
import globalStyles from "../styles/global.module.css";
import useAmount from "../hooks/useAmount";
import MealAmountInput from "../ui/MealAmountInput";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";
import toastNotify from "../helpers/toast";

function MealPage() {
  const { mealId } = useParams();
  const dispatch = useDispatch();

  const { data: meal, error, isLoading } = useGetMealByIdQuery(mealId);
  const { mealAmount, handleMealAmountChange, handleMealAmountButtonClick } =
    useAmount();

  const onAddToCartClick = () => {
    const { _id: id, name, description, price, picture } = meal;
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

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error: {error.data.message}</p>;
  } else {
    const { name, picture, description, price } = meal;
    content = (
      <>
        <div>
          <img className={styles.mealPicture} src={picture} alt={name} />
        </div>
        <div>
          <h2 className={styles.mealName}>{name}</h2>
          <p className={styles.mealDescription}>{description}</p>
          <p className={styles.mealPrice}>${price.toFixed(2)}</p>
          <div className={styles.mealAddSection}>
            <MealAmountInput
              showLabel={false}
              className={styles.mealAmountInput}
              mealAmount={mealAmount}
              handleMealAmountChange={handleMealAmountChange}
              handleMealAmountButtonClick={handleMealAmountButtonClick}
            />
            <button className={styles.addButton} onClick={onAddToCartClick}>
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className={`${styles.mealPage} ${globalStyles.container}`}>
      {content}
    </section>
  );
}

export default MealPage;
