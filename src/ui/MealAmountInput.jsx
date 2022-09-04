import { BsFileArrowUpFill, BsFileArrowDownFill } from "react-icons/bs";
import styles from "../styles/ui/MealAmountInput.module.css";

function MealAmountInput({
  mealAmount,
  handleMealAmountChange,
  handleMealAmountButtonClick,
  showLabel = true,
  className,
}) {
  return (
    <div className={`${styles.mealAmount} ${className}`}>
      {showLabel && (
        <label htmlFor="number" defaultValue="1">
          Amount
        </label>
      )}
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
  );
}

export default MealAmountInput;
