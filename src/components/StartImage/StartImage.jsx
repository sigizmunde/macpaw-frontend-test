import { StartPanel, StartImg } from './StartImage.styled';

const StartImage = () => {
  return (
    <StartPanel>
      <StartImg src={require('../../images/start.png')} alt="head image" />
    </StartPanel>
  );
};

export default StartImage;
