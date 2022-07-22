import Logo from 'components/Logo/Logo';
import MainMenu from 'components/MainMenu/MainMenu';
import {
  ControlWrapper,
  Section,
  H1,
  Description,
  Motto,
  DarkLightButton,
} from './ControlSection.styled';

const ControlSection = ({ handleDarkTheme }) => {
  return (
    <ControlWrapper>
      <DarkLightButton onClick={handleDarkTheme} />
      <Logo />
      <Section>
        <H1>Hi intern!</H1>
        <Description>Welcome to MI 2022 Front-end test</Description>
        <Motto>Lets start using The Dog API</Motto>
        <MainMenu />
      </Section>
    </ControlWrapper>
  );
};

export default ControlSection;
