import styles from "../styles/components/Meals.module.css";
import globalStyles from "../styles/global.module.css";
import Meal from "./Meal";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axios";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    let subscribed = true;
    const getMeals = async () => {
      try {
        const response = await axiosInstance.get("/meals", {
          signal: controller.signal,
        });
        if (subscribed) {
          setMeals(response.data);
          setError(null);
        }
      } catch (error) {
        if (error.message === "canceled") return;
        console.error(error);
        setError(error);
      }
      setLoading(false);
    };

    getMeals();

    return () => {
      controller.abort();
      subscribed = false;
    };
  }, []);

  return (
    <section className={`${styles.meals} ${globalStyles.container}`}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading &&
        !error &&
        meals.map((meal) => <Meal key={meal._id} {...meal} />)}
    </section>
  );
}

export default Meals;
