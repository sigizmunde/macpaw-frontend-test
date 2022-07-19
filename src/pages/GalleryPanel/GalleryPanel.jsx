import { useEffect, useState } from 'react';
import { fetchBreedList, fetchImages } from 'api-service/api';
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

const limitArray = [
  { id: '5', value: 'limit: 5' },
  { id: '10', value: 'limit: 10' },
  { id: '15', value: 'limit: 15' },
  { id: '20', value: 'limit: 20' },
];

const orderArray = [
  { id: 'random', value: 'Random' },
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
      const { data, itemsCount } = await fetchImages({
        breedId,
        limit,
        page,
        order,
        type,
      });
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

  const handleClickGallery = () => {};

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
          <TextBtn type="button">
            Upload{' '}
            <Svg>
              <use href={Icons + '#icon-upload-20'} />
            </Svg>
          </TextBtn>
        </FormWrapper>
        <SearchImagesFormWrapper>
          <div>
            <SmallCaption>Order</SmallCaption>
            <SelectInput
              items={orderArray}
              placeholder=" "
              initialIndex={0}
              width="100%"
              onPick={setOrder}
            />
          </div>
          <div>
            <SmallCaption>Type</SmallCaption>
            <SelectInput
              items={typeArray}
              placeholder=" "
              initialIndex={0}
              width="100%"
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
        <div style={{ position: 'relative', height: '80%' }}>
          {images.length > 0 && (
            <Gallery
              items={images}
              handleClick={handleClickGallery}
              hoverContent={`url(${require('images/icons/fav-30.png')})`}
              hoverCentered={true}
            />
          )}
        </div>
        <Pagination>
          {page > 0 && (
            <PagBtn
              type="button"
              onClick={() => {
                handlePrevPage();
              }}
            >
              <Svg>
                <use href={Icons + '#icon-back-20'} />
              </Svg>
              <span>prev</span>
            </PagBtn>
          )}
          {page < Math.floor(imgCount / Number.parseInt(limit)) && (
            <PagBtn
              type="button"
              onClick={() => {
                handleNextPage();
              }}
            >
              <span>next</span>
              <Svg180>
                <use href={Icons + '#icon-back-20'} />
              </Svg180>
            </PagBtn>
          )}
        </Pagination>
      </ContentPanel>
    </PanelWrapper>
  );
};

export default GalleryPanel;
