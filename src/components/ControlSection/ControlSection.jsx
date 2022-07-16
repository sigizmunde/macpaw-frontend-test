import MainMenu from 'components/MainMenu/MainMenu';
import { Section, H1, Description, Motto } from './ControlSection.styled';

const ControlSection = ({ onClick }) => {
  return (
    <Section>
      <H1>Hi intern!</H1>
      <Description>Welcome to MI 2022 Front-end test</Description>
      <Motto>Lets start using The Dog API</Motto>
      <MainMenu onClick={onClick} />
    </Section>
  );
};

export default ControlSection;
