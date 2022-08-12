import styles from "../styles/components/Meals.module.css";
import globalStyles from "../styles/global.module.css";
import meals from "../data/meals";
import Meal from "./Meal";

function Meals() {
  return (
    <section className={`${styles.meals} ${globalStyles.container}`}>
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </section>
  );
}

export default Meals;
