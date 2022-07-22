import { Img, GalleryLi } from './GalleryItem.styled';

const GalleryItem = ({
  id,
  imageURL,
  width,
  height,
  onClick,
  fav = false,
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
      fav={fav}
    >
      <div>
        <Img src={imageURL} alt="preview" />
      </div>
    </GalleryLi>
  );
};

export default GalleryItem;
