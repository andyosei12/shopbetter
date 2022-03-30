import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user-context";
import { ProductProvider } from "./contexts/products.context";
import "./index.scss";
import App from "./App";
import { CartDropdownProvider } from "./contexts/cart-dropdown.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
