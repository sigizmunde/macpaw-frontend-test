import { GalleryLi } from './GalleryItem.styled';

const GalleryItem = ({ id, imageURL, widthKoef, onClick }) => {
  return (
    <GalleryLi id={id} onClick={onClick} widthKoef={widthKoef}>
      <div>
        <img src={imageURL} alt="preview" />
      </div>
    </GalleryLi>
  );
};

export default GalleryItem;
