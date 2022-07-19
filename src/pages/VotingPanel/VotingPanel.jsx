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
  fetchImages,
  postImageFav,
  postImageVote,
  deleteFav,
  fetchFavs,
} from 'api-service/api';

const VotingPanel = () => {
  const [image, setImage] = useState({
    id: 'no_id',
    url: '',
    breeds: [{ name: '' }],
  });
  const [fav, setFav] = useState('');
  const [favArr, setFavArr] = useState([]);

  const getRandomImage = () => {
    fetchImages({ limit: 1 })
      .then(response => {
        setImage(response.data[0]);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getRandomImage();
  }, []);

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
      .catch(err => console.error(err));
  };

  const toggleFav = () => {
    if (!fav) postFav();
    else removeFav();
  };

  const handleVote = value => {
    postImageVote({ id: image.id, value: value }).then(response => {
      if (response && response.data.message === 'SUCCESS') {
        console.log('successfuly voted ', value);
      }
      getRandomImage();
    });
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
            <img src={image.url || ''} alt={image?.breeds[0]?.name || ''} />{' '}
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
      </ContentPanel>
    </PanelWrapper>
  );
};

export default VotingPanel;
