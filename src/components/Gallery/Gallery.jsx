import GalleryItem from 'components/GalleryItem/GalleryItem';

const Gallery = ({ items, handleClick }) => {
  return (
    <ul>
      {items.map(({ id, url }) => (
        <GalleryItem
          key={id}
          id={id}
          imageURL={url}
          onClick={() => handleClick(id)}
        />
      ))}
    </ul>
  );
};

export default Gallery;
