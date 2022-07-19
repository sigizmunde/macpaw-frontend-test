import { Img, GalleryLi } from './GalleryItem.styled';

const GalleryItem = ({
  id,
  imageURL,
  onClick,
  hoverContent = '',
  hoverCentered = true,
}) => {
  return (
    <GalleryLi
      id={id}
      onClick={onClick}
      hoverContent={hoverContent}
      hoverCentered={hoverCentered}
    >
      <div>
        <Img src={imageURL} alt="preview" />
      </div>
    </GalleryLi>
  );
};

export default GalleryItem;
