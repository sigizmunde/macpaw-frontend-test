import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
import { StartPanel, StartImg } from './StartImage.styled';

const StartImage = () => {
  return (
    <SectionWrapper>
      <StartPanel>
        <StartImg src={require('../../images/start.png')} alt="head image" />
      </StartPanel>
    </SectionWrapper>
  );
};

export default StartImage;
