import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCart from "../../components/product-cart/ProductCart";
import "./Shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;