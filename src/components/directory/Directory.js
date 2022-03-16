import CategoryItem from "../category-item/CategoryItem";
import "./Directory.styles.scss";
import categories from "../../data/categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
