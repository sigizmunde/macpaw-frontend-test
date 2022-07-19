import { Img, GalleryLi } from './GalleryItem.styled';

const GalleryItem = ({
  id,
  imageURL,
  width,
  height,
  onClick,
  hoverContent = '',
  hoverCentered = true,
}) => {
  return (
    <GalleryLi
      id={id}
      onClick={onClick}
      widthKoef={Number.parseInt(width) / Number.parseInt(height)}
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
