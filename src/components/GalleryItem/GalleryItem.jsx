import { Img, GalleryLi } from './GalleryItem.styled';

const GalleryItem = ({
  id,
  imageURL,
  widthKoef,
  onClick,
  hoverContent = '',
}) => {
  return (
    <GalleryLi
      id={id}
      onClick={onClick}
      widthKoef={widthKoef}
      hoverContent={hoverContent || 'not specified'}
    >
      <div>
        <Img src={imageURL} alt="preview" />
      </div>
    </GalleryLi>
  );
};

export default GalleryItem;
