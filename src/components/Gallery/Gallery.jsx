import GalleryItem from 'components/GalleryItem/GalleryItem';
import { GalleryList, TailPlaceholder } from './Gallery.styled';

const Gallery = ({
  items,
  handleClick,
  hoverContent = null,
  hoverCentered = false,
}) => {
  return (
    <GalleryList>
      {items.map(image => {
        const { id, url, width, height, breeds, fav_id } = image;
        return (
          <GalleryItem
            key={id}
            id={id}
            imageURL={url}
            width={width}
            height={height}
            fav={fav_id && fav_id > -1 ? true : false}
            onClick={() => handleClick(image)}
            hoverContent={
              hoverContent ||
              (breeds ? `'${breeds[0].name}'` : `'not specified'`)
            }
            hoverCentered={hoverCentered}
          />
        );
      })}
      <TailPlaceholder />
    </GalleryList>
  );
};

export default Gallery;
