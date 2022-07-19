import GalleryItem from 'components/GalleryItem/GalleryItem';
import { GalleryList } from './Gallery.styled';

const Gallery = ({
  items,
  handleClick,
  hoverContent = null,
  hoverCentered = false,
}) => {
  return (
    <GalleryList>
      {items.map(({ id, url, width, height, breeds }) => (
        <GalleryItem
          key={id}
          id={id}
          imageURL={url}
          onClick={() => handleClick(breeds[0]?.id || '')}
          hoverContent={hoverContent || breeds[0]?.name || 'not specified'}
          hoverCentered={hoverCentered}
        />
      ))}
    </GalleryList>
  );
};

export default Gallery;
