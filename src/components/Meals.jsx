import styles from "../styles/components/Meals.module.css";
import globalStyles from "../styles/global.module.css";
import Meal from "./Meal";
import { useGetMealsQuery } from "../slices/apiSlice";

function Meals() {
  const { data: meals, isLoading, error } = useGetMealsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error: {error.data.message}</p>;
  } else {
    content = meals.map((meal) => <Meal key={meal._id} {...meal} />);
  }

  return (
    <section className={`${styles.meals} ${globalStyles.container}`}>
      {content}
    </section>
  );
}

export default Meals;
