import styles from "../styles/components/Hero.module.css";
import Card from "../ui/Card";

function Hero() {
  return (
    <div className={styles.hero}>
      <Card className={styles.heroCard}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from out broad section of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs.
        </p>
      </Card>
    </div>
  );
}

export default Hero;
