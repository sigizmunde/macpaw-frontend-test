import { StartPanel, StartImg, StartSectionWrapper } from './StartImage.styled';

const StartImage = () => {
  return (
    <StartSectionWrapper>
      <StartPanel>
        <StartImg src={require('../../images/start.png')} alt="head image" />
      </StartPanel>
    </StartSectionWrapper>
  );
};

export default StartImage;
