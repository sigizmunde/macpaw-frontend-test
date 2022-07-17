import GalleryItem from 'components/GalleryItem/GalleryItem';
import { GalleryList } from './Gallery.styled';

const Gallery = ({ items, handleClick }) => {
  return (
    <GalleryList>
      {items.map(({ id, url, width, height, breeds }) => (
        <GalleryItem
          key={id}
          id={id}
          imageURL={url}
          widthKoef={Math.round((width / height) * 3)}
          onClick={() => handleClick(id)}
          hoverContent={breeds[0].name}
        />
      ))}
    </GalleryList>
  );
};

export default Gallery;
