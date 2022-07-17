import { useState, useRef, useEffect } from 'react';
import { fetchBreedList, fetchImages } from 'api-service/api';
import BackBtn from 'components/BackBtn/BackBtn';
import ChkBtn from 'components/ChkBtn/ChkBtn';
import {
  TextBtn,
  FormWrapper,
  PanelWrapper,
  Panel,
  Svg,
  Svg180,
  PanelBtn,
} from 'components/StyledBlocks/StyledBlocks';
import Icons from 'images/icons/symbol-defs.svg';
import SelectInput from 'components/SelectInput/SelectInput';
import Gallery from 'components/Gallery/Gallery';
import Pagination from './BreedsPanel.styled';
import Loader from 'components/Loader/Loader';

const limitArray = [
  { id: '5', value: 'limit: 5' },
  { id: '10', value: 'limit: 10' },
  { id: '15', value: 'limit: 15' },
  { id: '20', value: 'limit: 20' },
];

function usePreviousValue(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const BreedsPanel = () => {
  const [breedArray, setBreedArray] = useState([]);
  const [breedId, setBreedId] = useState('');
  const [limit, setLimit] = useState('10');
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [activeImageId, setActiveImageId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [breedId, limit]);

  useEffect(() => {
    if (breedId !== '') {
      async function loadingImages() {
        setIsLoading(true);
        const imageArray = await fetchImages({ breedId, limit, page });
        setImages(imageArray);
        setIsLoading(false);
      }
      loadingImages();
    }
  }, [breedId, limit, page]);

  async function getBreeds() {
    const data = await fetchBreedList();
    const breeds = data.map(({ id, name }) => ({ id: id + '', value: name }));
    setBreedArray([{ id: '-1', value: 'All Breeds' }, ...breeds]);
  }

  useEffect(() => {
    getBreeds();
  }, []);

  const [sortingA, setSortingA] = useState(false);
  const [sortingZ, setSortingZ] = useState(false);

  const prevSortA = usePreviousValue(sortingA);
  const prevSortZ = usePreviousValue(sortingZ);

  useEffect(() => {
    // console.log('prevA', prevSortA, 'A', sortingA);
    if (!prevSortA && sortingA) setSortingZ(false);
  }, [sortingA, prevSortA]);

  useEffect(() => {
    // console.log('prevZ', prevSortZ, 'Z', sortingZ);
    if (!prevSortZ && sortingZ) setSortingA(false);
  }, [sortingZ, prevSortZ]);

  const handleClick = id => {
    setActiveImageId(id);
  };

  return (
    <PanelWrapper>
      <Panel>
        <FormWrapper>
          <BackBtn />
          <TextBtn type="button">Breeds</TextBtn>
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
          <ChkBtn checked={sortingA} setChecked={setSortingA}>
            <Svg>
              <use href={Icons + '#icon-sort-20'} />
            </Svg>
          </ChkBtn>
          <ChkBtn checked={sortingZ} setChecked={setSortingZ}>
            <Svg>
              <use href={Icons + '#icon-sort-revert-20'} />
            </Svg>
          </ChkBtn>
        </FormWrapper>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Gallery items={images} handleClick={handleClick} />
        )}
        <Pagination>
          {page > 0 && (
            <PanelBtn type="button" onClick={() => setPage(page => page - 1)}>
              <Svg>
                <use href={Icons + '#icon-back-20'} />
              </Svg>
              prev
            </PanelBtn>
          )}
          <PanelBtn type="button" onClick={() => setPage(page => page + 1)}>
            next
            <Svg180>
              <use href={Icons + '#icon-back-20'} />
            </Svg180>
          </PanelBtn>
        </Pagination>
      </Panel>
    </PanelWrapper>
  );
};

export default BreedsPanel;