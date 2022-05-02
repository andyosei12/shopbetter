import "./Button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({
  children,
  buttonType,
  isLoading,
  isPayment,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${
        isPayment ? "payment-button" : ""
      }`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <div className="button-spinner__container" /> : children}
    </button>
  );
};

export default Button;
