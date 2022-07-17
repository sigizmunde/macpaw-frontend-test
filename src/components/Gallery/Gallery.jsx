import GalleryItem from 'components/GalleryItem/GalleryItem';
import { GalleryList } from './Gallery.styled';

const Gallery = ({ items, handleClick }) => {
  return (
    <GalleryList>
      {items.map(({ id, url, width, height }) => (
        <GalleryItem
          key={id}
          id={id}
          imageURL={url}
          widthKoef={Math.round((width / height) * 3)}
          onClick={() => handleClick(id)}
        />
      ))}
    </GalleryList>
  );
};

export default Gallery;
