import { useState } from "react";

function useAmount() {
  const [mealAmount, setMealAmount] = useState(1);

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

  return { mealAmount, handleMealAmountChange, handleMealAmountButtonClick };
}

export default useAmount;
