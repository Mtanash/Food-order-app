import { Formik, Form, Field, ErrorMessage } from "formik";
import toastNotify from "../helpers/toast";
import { useSelector } from "react-redux";
import { resetCartItems, selectCartItems } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useRegisterOrderMutation } from "../slices/apiSlice";
import { closeModal } from "../slices/modalSlice";
import styles from "../styles/components/Checkout.module.css";

function Checkout({ closeCheckingOut }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [registerOrder, result] = useRegisterOrderMutation();

  const submitOrder = async (orderData) => {
    try {
      await registerOrder(orderData).unwrap();

      dispatch(resetCartItems());
      toastNotify("Order submitted successfully. Thanks!");
      dispatch(closeModal());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", street: "", postalCode: "", city: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Name field required";
        } else if (!values.street) {
          errors.street = "Street field required";
        } else if (!values.postalCode) {
          errors.postalCode = "Postal Code field required";
        } else if (!values.city) {
          errors.city = "City field required";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const items = cartItems.map((item) => {
          return { quantity: item.amount, item: item.data.id };
        });
        const order = { items: items, data: values };
        await submitOrder(order);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <p className={styles.title}>Checkout</p>
          <div className={styles.inputOuterContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="nameField">Name</label>
              <Field id="nameField" type="text" name="name" />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              component="p"
            />
          </div>

          <div className={styles.inputOuterContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="streetField">Street</label>
              <Field id="streetField" type="text" name="street" />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="street"
              component="p"
            />
          </div>

          <div className={styles.inputOuterContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="postalCodeField">Postal Code</label>
              <Field id="postalCodeField" type="text" name="postalCode" />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="postalCode"
              component="p"
            />
          </div>

          <div className={styles.inputOuterContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="cityField">City</label>
              <Field id="cityField" type="text" name="city" />
            </div>
            <ErrorMessage
              className={styles.errorMessage}
              name="city"
              component="p"
            />
          </div>

          <div className={styles.buttons}>
            <button
              className={styles.backButton}
              type="button"
              onClick={closeCheckingOut}
            >
              Back
            </button>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={result.isLoading}
            >
              {result.isLoading ? "Please wait..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Checkout;
