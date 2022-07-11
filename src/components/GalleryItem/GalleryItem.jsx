const GalleryItem = ({ id, imageURL, onClick }) => {
  return (
    <div id={id} onClick={onClick}>
      <img src={imageURL} alt="preview" />
    </div>
  );
};

export default GalleryItem;
