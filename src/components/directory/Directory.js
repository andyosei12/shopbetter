import DirectoryItem from "../directory-item/DirectoryItem";
import "./Directory.styles.scss";
import categories from "../../data/categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
