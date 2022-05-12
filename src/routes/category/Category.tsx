import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinnrer/Spinner";

import "./Category.styles.scss";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
