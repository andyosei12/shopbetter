import { FC, ButtonHTMLAttributes } from "react";
import "./Button.styles.scss";

enum BUTTON_TYPE_CLASSES {
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
  isPayment?: boolean;
  styles?: {};
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  isPayment,
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${
        buttonType && BUTTON_TYPE_CLASSES[buttonType]
      } ${isPayment ? "payment-button" : ""}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <div className="button-spinner__container" /> : children}
    </button>
  );
};

export default Button;
