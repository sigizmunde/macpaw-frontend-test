import {
  createLogItem,
  deleteFav,
  deleteImageVote,
  fetchFavs,
  fetchImage,
  fetchImages,
  fetchVotes,
  searchBreeds,
} from 'api-service/api';
import BackBtn from 'components/BackBtn/BackBtn';
import Gallery from 'components/Gallery/Gallery';
import Loader from 'components/Loader/Loader';
import { LogItem } from 'components/LogList/LogList.styled';
import {
  FormWrapper,
  PanelWrapper,
  Svg,
  Svg180,
  TextBtn,
} from 'components/StyledBlocks/StyledBlocks';
import {
  ContentPanel,
  PagBtn,
  Pagination,
} from 'pages/BreedsPanel/BreedsPanel.styled';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Icons from 'images/icons/symbol-defs.svg';
import { P, Span } from './CategoryPanel.styled';
import { useEffect } from 'react';
import Log from 'components/LogList/LogList';

const CategoryPanel = ({ mode }) => {
  //mode = ['search', 'likes', 'dislikes', 'favourites']
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [imgCount, setImgCount] = useState(0);
  const [showLog, setShowLog] = useState(false);
  const [log, setLog] = useState([]);
  const limit = 10;

  const navigate = useNavigate();

  useEffect(() => {
    setShowLog(false);
  }, [mode, page, searchParams]);

  useEffect(() => {
    async function getSearchedImages() {
      setIsLoading(true);
      const breedList = await searchBreeds({
        q: searchParams.get('query'),
      });
      let imageArray = [];
      let i = 0;
      for (const { id } of breedList) {
        i += 1;
        if (i > limit) break;
        const { data } = await fetchImages({
          breedId: id,
          limit: 1,
          order: 'ASC',
        });
        imageArray = [...imageArray, ...data];
      }
      setImages(imageArray);
      setIsLoading(false);
    }
    if (mode === 'search') getSearchedImages();
  }, [mode, searchParams]);

  useEffect(() => {
    async function getFavImages() {
      setIsLoading(true);
      const { data } = await fetchFavs();
      const filteredData = data.filter(
        ({ id, image_id }) =>
          !data.find(e => e.image_id === image_id && e.id !== id)
      );
      console.log('filteredData', filteredData);
      try {
        setImgCount(filteredData.length);
        let imageArray = [];
        for (let i = 0; i < limit; i += 1) {
          const idx = i + page * limit;
          if (idx >= filteredData.length) break;
          const { image_id, id } = filteredData[idx];
          const imageResponse = await fetchImage({
            image_id,
          });
          console.log(imageResponse);
          imageResponse.data.fav_id = id;
          imageArray = [...imageArray, imageResponse.data];
        }
        setImages(imageArray);
        console.log(imageArray);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (mode === 'favourites') getFavImages();
  }, [mode, page, searchParams]);

  useEffect(() => {
    async function getVoteImages(targetValue = 1) {
      setIsLoading(true);
      const { data, itemsCount } = await fetchVotes({ page, limit });
      const filteredData = data.filter(
        ({ id, image_id }) =>
          !data.find(e => e.image_id === image_id && e.id !== id)
      );
      try {
        setImgCount(itemsCount);
        let imageArray = [];
        for (const { image_id, id, value } of filteredData) {
          if (value !== targetValue) continue;
          const imageResponse = await fetchImage({
            image_id,
          });
          console.log(imageResponse);
          imageResponse.data.vote_id = id;
          imageArray = [...imageArray, imageResponse.data];
          if (
            imageArray.length === 0 &&
            page < Math.floor(itemsCount / limit)
          ) {
            setPage(page => page + 1);
          }
        }
        setImages(imageArray);
        console.log(imageArray);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (mode === 'likes') getVoteImages(1);
    if (mode === 'dislikes') getVoteImages(0);
  }, [mode, page, searchParams]);

  const handlePrevPage = () => {
    setPage(page => page - 1);
  };

  const handleNextPage = () => {
    setPage(page => page + 1);
  };

  const handleClickGallery = image => {
    if (mode === 'likes' || mode === 'dislikes') {
      deleteImageVote({ id: image.vote_id })
        .then(status => {
          if (status.data.message === 'SUCCESS')
            setImages(images => images.filter(({ id }) => id !== image.id));
          createLogItem({ imageId: image.id, eventType: 'unvote' });
          setLog(JSON.parse(sessionStorage.getItem('logDog')));
          setShowLog(true);
        })
        .catch(err => console.error(err.message));
    }
    if (mode === 'favourites') {
      deleteFav({ id: image.fav_id })
        .then(status => {
          if (status.data.message === 'SUCCESS')
            setImages(images.filter(({ id }) => id !== image.id));
          createLogItem({ imageId: image.id, eventType: 'unfav' });
          setLog(JSON.parse(sessionStorage.getItem('logDog')));
          setShowLog(true);
        })
        .catch(err => console.error(err.message));
    }
    if (mode === 'search') {
      navigate(`/breeds/${image.breeds[0].id}`);
    }
  };

  return (
    <PanelWrapper>
      <ContentPanel>
        <FormWrapper>
          <BackBtn />
          <TextBtn type="button" disabled>
            {mode}
          </TextBtn>
          <div style={{ marginLeft: 'auto' }} />
        </FormWrapper>
        {isLoading && <Loader />}
        {images.length > 0 && (
          <>
            {mode === 'search' && (
              <P>
                Search results for: <Span>{searchParams.get('query')}</Span>
              </P>
            )}
            <Gallery
              items={images}
              handleClick={handleClickGallery}
              hoverContent={
                mode === 'favourites'
                  ? `url(${require('images/icons/fav-30.png')});`
                  : mode === 'likes'
                  ? `'remove'`
                  : mode === 'dislikes'
                  ? `'remove'`
                  : ''
              }
              hoverCentered={mode === 'favourites' && true}
            />
          </>
        )}
        {images.length === 0 && <LogItem>No item found</LogItem>}
        {showLog && <Log log={log} height="90px" />}
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
      </ContentPanel>
    </PanelWrapper>
  );
};

export default CategoryPanel;
