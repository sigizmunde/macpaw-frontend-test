import { useState, useEffect } from 'react';
import BackBtn from 'components/BackBtn/BackBtn';
import {
  FormWrapper,
  PanelWrapper,
  Svg,
  TextBtn,
} from 'components/StyledBlocks/StyledBlocks';
import { ContentPanel } from 'pages/BreedsPanel/BreedsPanel.styled';
import {
  DislikeControlBtn,
  FavControlBtn,
  ImageContainer,
  LikeControlBtn,
  LogItem,
  LogList,
  OverlayControlPanel,
  TimeStamp,
  VotingWrapper,
} from './VotingPanel.styled';
import Icons from 'images/icons/symbol-defs.svg';
import {
  fetchImages,
  postImageFav,
  postImageVote,
  deleteFav,
  fetchFavs,
} from 'api-service/api';
import Loader from 'components/Loader/Loader';

const VotingPanel = () => {
  const [image, setImage] = useState({
    id: 'no_id',
    url: '',
    breeds: [{ name: '' }],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fav, setFav] = useState('');
  const [favArr, setFavArr] = useState([]);
  const [log, setLog] = useState(
    JSON.parse(localStorage.getItem('logDog')) || []
  );

  const getRandomImage = () => {
    setIsLoading(true);
    fetchImages({ limit: 1 })
      .then(response => {
        setImage(response.data[0]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  useEffect(() => {
    console.log(log);
    localStorage.setItem('logDog', JSON.stringify(log));
  }, [log]);

  const createLogItem = ({ eventType, imageId }) => {
    const dateTime = new Date();
    setLog(log => [{ date: dateTime, id: imageId, event: eventType }, ...log]);
  };

  useEffect(() => {
    fetchFavs().then(response => {
      console.log(response.data);
      setFavArr(
        response.data.map(({ id, image_id }) => ({ id, imageId: image_id }))
      );
    });
  }, []);

  useEffect(() => {
    const isFaved = favArr.filter(({ imageId }) => imageId === image.id);
    if (isFaved.length > 0) {
      setFav(isFaved[0].id);
    } else {
      setFav('');
    }
  }, [favArr, image]);

  const postFav = () => {
    postImageFav({ id: image.id })
      .then(response => {
        if (response && response.data.message === 'SUCCESS')
          console.log(response);
        setFavArr(favArr => [
          ...favArr,
          { id: response.data.id, imageId: image.id },
        ]);
      })
      .then(() => {
        createLogItem({ imageId: image.id, eventType: 'fav' });
      })
      .catch(err => console.error(err));
  };

  const removeFav = () => {
    deleteFav({ id: fav })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          setFavArr(favArr => {
            return favArr.filter(({ imageId }) => imageId !== image.id);
          });
        }
      })
      .then(() => {
        createLogItem({ imageId: image.id, eventType: 'unfav' });
      })
      .catch(err => console.error(err));
  };

  const toggleFav = () => {
    if (!fav) postFav();
    else removeFav();
  };

  const handleVote = value => {
    postImageVote({ id: image.id, value: value })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          console.log('successfuly voted ', value);
        }
        getRandomImage();
      })
      .then(() => {
        createLogItem({
          imageId: image.id,
          eventType: value ? 'vote-up' : 'vote-down',
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <PanelWrapper>
      <ContentPanel>
        <FormWrapper>
          <BackBtn />
          <TextBtn type="button" disabled>
            Voting
          </TextBtn>
          <div style={{ marginLeft: 'auto' }}></div>
        </FormWrapper>

        <VotingWrapper>
          <ImageContainer>
            {isLoading && <Loader />}
            <img
              src={image.url || ''}
              alt={image?.breeds[0]?.name || ''}
            />{' '}
          </ImageContainer>
          <OverlayControlPanel>
            <LikeControlBtn onClick={() => handleVote(1)}>
              <Svg>
                <use href={Icons + '#icon-like-30'} />
              </Svg>
            </LikeControlBtn>
            <FavControlBtn onClick={toggleFav}>
              <Svg>
                {fav ? (
                  <use href={Icons + '#icon-fav-filled-30'} />
                ) : (
                  <use href={Icons + '#icon-fav-30'} />
                )}
              </Svg>
            </FavControlBtn>
            <DislikeControlBtn onClick={() => handleVote(0)}>
              <Svg>
                <use href={Icons + '#icon-dislike-30'} />
              </Svg>
            </DislikeControlBtn>
          </OverlayControlPanel>
        </VotingWrapper>

        <LogList>
          {log.length > 0 &&
            log.map(({ date, id, event }) => {
              let messageString;
              let iconHref = null;
              switch (event) {
                case 'fav':
                  messageString = 'was added to Favourites';
                  iconHref = Icons + '#icon-fav-color-20';
                  break;
                case 'unfav':
                  messageString = 'was removed from Favourites';
                  break;
                case 'vote-up':
                  messageString = 'was added to Likes';
                  iconHref = Icons + '#icon-like-color-20';
                  break;
                case 'vote-down':
                  messageString = 'was added to Dislikes';
                  iconHref = Icons + '#icon-dislike-color-20';
                  break;
                default:
                  break;
              }
              return (
                <LogItem key={date}>
                  <TimeStamp>
                    {new Date(date).getHours()}:{new Date(date).getMinutes()}
                  </TimeStamp>
                  <div>
                    Image ID: <span>{id}</span> {messageString}
                  </div>
                  <div>
                    {iconHref && (
                      <Svg>
                        <use href={iconHref} />
                      </Svg>
                    )}
                  </div>
                </LogItem>
              );
            })}
        </LogList>
      </ContentPanel>
    </PanelWrapper>
  );
};

export default VotingPanel;
