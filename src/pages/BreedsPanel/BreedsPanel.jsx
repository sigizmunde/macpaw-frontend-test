import { useState, useEffect } from 'react';
import { fetchBreedList, fetchImages } from 'api-service/api';
import BackBtn from 'components/BackBtn/BackBtn';
import ChkBtn from 'components/ChkBtn/ChkBtn';
import {
  TextBtn,
  FormWrapper,
  PanelWrapper,
  Svg,
  Svg180,
} from 'components/StyledBlocks/StyledBlocks';
import Icons from 'images/icons/symbol-defs.svg';
import SelectInput from 'components/SelectInput/SelectInput';
import Gallery from 'components/Gallery/Gallery';
import { ContentPanel, Pagination, PagBtn } from './BreedsPanel.styled';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const limitArray = [
  { id: '5', value: 'limit: 5' },
  { id: '10', value: 'limit: 10' },
  { id: '15', value: 'limit: 15' },
  { id: '20', value: 'limit: 20' },
];

const BreedsPanel = () => {
  const [breedArray, setBreedArray] = useState([]);
  const [breedId, setBreedId] = useState('');
  const [limit, setLimit] = useState('10');
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('RAND');
  const [imgCount, setImgCount] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [breedId, order, limit]);

  useEffect(() => {
    if (breedId !== '') {
      async function loadingImages() {
        setIsLoading(true);
        const { data, itemsCount } = await fetchImages({
          breedId,
          order,
          limit,
          page,
        });
        setImages(data);
        setImgCount(itemsCount);
        setIsLoading(false);
      }
      loadingImages();
    }
  }, [breedId, order, limit, page]);

  async function getBreeds() {
    const data = await fetchBreedList();
    const breeds = data.map(({ id, name }) => ({ id: id + '', value: name }));
    setBreedArray([{ id: '-1', value: 'All Breeds' }, ...breeds]);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  const toggleSortingAsc = () => {
    setOrder(sorting => (sorting !== 'ASC' ? 'ASC' : 'RAND'));
  };

  const toggleSortingDesc = () => {
    setOrder(sorting => (sorting !== 'DESC' ? 'DESC' : 'RAND'));
  };

  const navigate = useNavigate();

  const handleClick = imageBreedId => {
    navigate(`${imageBreedId}`);
  };

  return (
    <PanelWrapper>
      <ContentPanel>
        <FormWrapper>
          <BackBtn />
          <TextBtn type="button" disabled>
            Breeds
          </TextBtn>
          <SelectInput
            items={breedArray}
            placeholder="select a breed"
            // initialIndex={0}
            width="40%"
            onPick={setBreedId}
          />
          <SelectInput
            items={limitArray}
            placeholder=" "
            initialIndex={1}
            width="101px"
            onPick={setLimit}
          />
          <ChkBtn checked={order === 'ASC'} setChecked={toggleSortingAsc}>
            <Svg>
              <use href={Icons + '#icon-sort-20'} />
            </Svg>
          </ChkBtn>
          <ChkBtn checked={order === 'DESC'} setChecked={toggleSortingDesc}>
            <Svg>
              <use href={Icons + '#icon-sort-revert-20'} />
            </Svg>
          </ChkBtn>
        </FormWrapper>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Gallery items={images} handleClick={handleClick} />
        )}
        {order !== 'RAND' && (
          <Pagination>
            {page > 0 && (
              <PagBtn type="button" onClick={() => setPage(page => page - 1)}>
                <Svg>
                  <use href={Icons + '#icon-back-20'} />
                </Svg>
                <span>prev</span>
              </PagBtn>
            )}
            {page < Math.floor(imgCount / Number.parseInt(limit)) && (
              <PagBtn type="button" onClick={() => setPage(page => page + 1)}>
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
              <PagBtn type="button" onClick={() => setPage(page => page + 1)}>
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

export default BreedsPanel;
