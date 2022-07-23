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
  OverlayControlPanel,
  VotingWrapper,
} from './VotingPanel.styled';
import Icons from 'images/icons/symbol-defs.svg';
import {
  postImageFav,
  postImageVote,
  deleteFav,
  fetchFavParamImages,
  createLogItem,
} from 'api-service/api';
import Loader from 'components/Loader/Loader';
import Log from 'components/LogList/LogList';

const VotingPanel = () => {
  const [image, setImage] = useState({
    id: 'no_id',
    url: '',
    breeds: [{ name: '' }],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [log, setLog] = useState(
    JSON.parse(sessionStorage.getItem('logDog')) || []
  );

  const getRandomImage = () => {
    setIsLoading(true);
    fetchFavParamImages({ limit: 1 })
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
    sessionStorage.setItem('logDog', JSON.stringify(log));
  }, [log]);

  const postFav = () => {
    postImageFav({ id: image.id })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          image.fav_id = response.data.id;
        }
      })
      .then(() => {
        setLog(createLogItem({ imageId: image.id, eventType: 'fav' }));
      })
      .catch(err => console.error(err));
  };

  const removeFav = () => {
    deleteFav({ id: image.fav_id })
      .then(response => {
        if (response && response.data.message === 'SUCCESS') {
          image.fav_id = -1;
        }
      })
      .then(() => {
        setLog(createLogItem({ imageId: image.id, eventType: 'unfav' }));
      })
      .catch(err => console.error(err));
  };

  const toggleFav = () => {
    if (image.fav_id < 0) postFav();
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
        setLog(
          createLogItem({
            imageId: image.id,
            eventType: value ? 'vote-up' : 'vote-down',
          })
        );
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
                {image.fav_id > -1 ? (
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

        <Log log={log} />
      </ContentPanel>
    </PanelWrapper>
  );
};

export default VotingPanel;
