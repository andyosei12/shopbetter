import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className="directory-item-container">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
