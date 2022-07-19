import { useEffect, useState } from 'react';
import { fetchImages } from 'api-service/api';
import Loader from 'components/Loader/Loader';
import {
  BreedTitle,
  CarouselWrapper,
  FlexDiv,
  ImageContainer,
  InfoContainer,
  OverlayControlPanel,
  SliderBtn,
  Subtitle,
} from './BreedInfo.styled';
import { Link, useParams } from 'react-router-dom';

const { default: BackBtn } = require('components/BackBtn/BackBtn');
const { ContentPanel } = require('pages/BreedsPanel/BreedsPanel.styled');
const {
  PanelWrapper,
  FormWrapper,
  TextBtn,
  FadedTextBtn,
} = require('components/StyledBlocks/StyledBlocks');

const BreedInfo = () => {
  const { breedId } = useParams();

  const [img, setImg] = useState({ url: '', name: '' });
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadingImages() {
      setIsLoading(true);
      const { data } = await fetchImages({
        breedId,
        limit: 5,
        page: 0,
      });
      setItems(data);
      setImg({ url: data[0].url, name: data[0].breeds[0]?.name || '' });
      setIsLoading(false);
    }
    try {
      loadingImages();
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  }, [breedId]);

  return (
    <PanelWrapper>
      <ContentPanel>
        <FormWrapper>
          <BackBtn />
          <Link to="/breeds/">
            <FadedTextBtn type="button">Breeds</FadedTextBtn>
          </Link>
          <TextBtn type="button" disabled>
            {breedId}
          </TextBtn>
          <div style={{ marginLeft: 'auto' }}></div>
        </FormWrapper>
        {isLoading && <Loader />}
        <CarouselWrapper>
          <ImageContainer>
            <img src={img.url} alt={img.name} />
          </ImageContainer>
          <OverlayControlPanel>
            {items.map(({ id, url, breeds }) => (
              <SliderBtn
                key={id}
                onClick={() => {
                  setImg({ url, name: breeds[0]?.name });
                }}
                active={url === img.url}
              />
            ))}
          </OverlayControlPanel>
        </CarouselWrapper>
        {items.length > 0 && (
          <InfoContainer>
            <BreedTitle>{items[0].breeds[0].name}</BreedTitle>
            <Subtitle>
              {items[0].breeds[0].bred_for || 'not specified'}
            </Subtitle>
            <FlexDiv>
              <div>
                <span>Temperament: </span>

                <p>{items[0].breeds[0].temperament}</p>
              </div>
              <div>
                <p>
                  <span>Origin: </span>
                  {items[0].breeds[0].origin || 'not specified'}
                </p>
                <p>
                  <span>Weight: </span>
                  {items[0].breeds[0].weight.metric + 'kgs' || 'not specified'}
                </p>
                <p>
                  <span>Lifespan: </span>
                  {items[0].breeds[0].life_span || 'not specified'}
                </p>
              </div>
            </FlexDiv>
          </InfoContainer>
        )}
      </ContentPanel>
    </PanelWrapper>
  );
};

export default BreedInfo;
