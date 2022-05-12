import { Link } from "react-router-dom";
import "./DirectoryItem.styles.scss";

type DirectoryItemType = {
  id: number;
  title: string;
  imageUrl: string;
};

type DirectoryItemProps = {
  category: DirectoryItemType;
};

const DirectoryItem = ({
  category: { imageUrl, title },
}: DirectoryItemProps) => {
  return (
    <div className="directory-item-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="body">
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
