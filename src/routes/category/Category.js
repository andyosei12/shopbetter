import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../../components/product-card/ProductCard";

import "./Category.styles.scss";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();
  const { data, loading } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;

      setProducts(items);
    }
  }, [category, data]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {loading
          ? "Loading..."
          : products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default Category;
