import { useEffect, useState } from 'react';
import {
  deleteFav,
  fetchBreedList,
  fetchFavParamImages,
  postImageFav,
} from 'api-service/api';
import { SearchImagesFormWrapper, SmallCaption } from './GalleryPanel.styled';
import BackBtn from 'components/BackBtn/BackBtn';
import Gallery from 'components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import SelectInput from 'components/SelectInput/SelectInput';
import {
  FormWrapper,
  PanelBtn,
  PanelWrapper,
  Svg,
  Svg180,
  TextBtn,
} from 'components/StyledBlocks/StyledBlocks';
import Icons from 'images/icons/symbol-defs.svg';
import {
  ContentPanel,
  PagBtn,
  Pagination,
} from 'pages/BreedsPanel/BreedsPanel.styled';
import { Link } from 'react-router-dom';

const limitArray = [
  { id: '5', value: 'limit: 5' },
  { id: '10', value: 'limit: 10' },
  { id: '15', value: 'limit: 15' },
  { id: '20', value: 'limit: 20' },
];

const orderArray = [
  { id: 'RAND', value: 'Random' },
  { id: 'DESC', value: 'Desc' },
  { id: 'ASC', value: 'Asc' },
];

const typeArray = [
  { id: 'all', value: 'All' },
  { id: 'static', value: 'Static' },
  { id: 'animated', value: 'Animated' },
];

const GalleryPanel = () => {
  const [breedArray, setBreedArray] = useState([]);
  const [breedId, setBreedId] = useState('-1');
  const [limit, setLimit] = useState('10');
  const [page, setPage] = useState(0);
  const [imgCount, setImgCount] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState(orderArray[0].id);
  const [type, setType] = useState(typeArray[0].id);

  useEffect(() => {
    setPage(0);
  }, [breedId, limit, type, order]);

  const handleUpdate = () => {
    async function loadingImages() {
      setIsLoading(true);
      const { data, itemsCount } = await fetchFavParamImages({
        breedId,
        limit,
        page,
        order,
        type,
      });
      console.log('data is', data);
      setImages(data);
      setImgCount(itemsCount);
      setIsLoading(false);
    }
    loadingImages();
  };

  const handleUpdateFirstPage = () => {
    setPage(0);
    handleUpdate();
  };

  const handlePrevPage = async () => {
    await setPage(page => page - 1);
    handleUpdate();
  };

  const handleNextPage = async () => {
    await setPage(page => page + 1);
    handleUpdate();
  };

  const postFav = image => {
    postImageFav({ id: image.id })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          setImages(images =>
            images.map(item => {
              if (item.id === image.id) item.fav_id = response.data.id;
              return item;
            })
          );
        }
      })
      .catch(err => console.error(err));
  };

  const removeFav = image => {
    deleteFav({ id: image.fav_id })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          setImages(images =>
            images.map(item => {
              if (item.id === image.id) item.fav_id = -1;
              return item;
            })
          );
        }
      })
      .catch(err => console.error(err));
  };

  const handleClickGallery = image => {
    if (image.fav_id > -1) removeFav(image);
    else postFav(image);
  };

  async function getBreeds() {
    const data = await fetchBreedList();
    const breeds = data.map(({ id, name }) => ({
      id: id + '',
      value: name,
    }));
    setBreedArray([{ id: '-1', value: 'All Breeds' }, ...breeds]);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <PanelWrapper>
      <ContentPanel>
        <FormWrapper>
          <BackBtn />
          <TextBtn type="button" disabled>
            Gallery
          </TextBtn>
          <div style={{ marginLeft: 'auto' }} />
          <Link to="/upload/">
            <TextBtn type="button">
              <Svg>
                <use href={Icons + '#icon-upload-16'} />
              </Svg>
              Upload
            </TextBtn>
          </Link>
        </FormWrapper>
        <SearchImagesFormWrapper>
          <div>
            <SmallCaption>Order</SmallCaption>
            <SelectInput
              items={orderArray}
              placeholder=" "
              initialIndex={0}
              width={'100%'}
              onPick={setOrder}
            />
          </div>
          <div>
            <SmallCaption>Type</SmallCaption>
            <SelectInput
              items={typeArray}
              placeholder=" "
              initialIndex={0}
              width={'100%'}
              onPick={setType}
            />
          </div>
          <div>
            <SmallCaption>Breed</SmallCaption>
            <SelectInput
              items={breedArray}
              placeholder="select a breed"
              initialIndex={0}
              width="100%"
              onPick={setBreedId}
            />
          </div>
          <div>
            <SmallCaption>Limit</SmallCaption>
            <SelectInput
              items={limitArray}
              placeholder=" "
              initialIndex={1}
              width="100%"
              onPick={setLimit}
            />
          </div>

          <PanelBtn onClick={handleUpdateFirstPage}>
            <Svg>
              <use href={Icons + '#icon-update-20'} />
            </Svg>
          </PanelBtn>
        </SearchImagesFormWrapper>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Gallery
            items={images}
            handleClick={handleClickGallery}
            hoverContent={`url(${require('images/icons/fav-30.png')});`}
            hoverCentered={true}
          />
        )}
        {order !== 'RAND' && (
          <Pagination>
            {page > 0 && (
              <PagBtn type="button" onClick={handlePrevPage}>
                <Svg>
                  <use href={Icons + '#icon-back-20'} />
                </Svg>
                <span>prev</span>
              </PagBtn>
            )}
            {page < Math.floor(imgCount / Number.parseInt(limit)) && (
              <PagBtn type="button" onClick={handleNextPage}>
                <span>next</span>
                <Svg180>
                  <use href={Icons + '#icon-back-20'} />
                </Svg180>
              </PagBtn>
            )}
          </Pagination>
        )}
        {order === 'RAND' && (
          <Pagination>
            {imgCount > Number.parseInt(limit) && (
              <PagBtn type="button" onClick={handleNextPage}>
                <span>Load more random pics</span>
                <Svg180>
                  <use href={Icons + '#icon-back-20'} />
                </Svg180>
              </PagBtn>
            )}
          </Pagination>
        )}
      </ContentPanel>
    </PanelWrapper>
  );
};

export default GalleryPanel;
