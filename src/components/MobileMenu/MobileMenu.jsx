import { ReactComponent as SvgLogo } from '../../images/logo.svg';
import Icons from 'images/icons/symbol-defs.svg';
import MainMenu from 'components/MainMenu/MainMenu';
import {
  CloseBtn,
  ControlWrapper,
  Section,
  DarkLightButton,
} from './MobileMenu.styled';
import { Svg } from 'components/StyledBlocks/StyledBlocks';

const MobileMenu = ({ handleDarkTheme, handleShowMenu }) => {
  return (
    <ControlWrapper>
      <DarkLightButton onClick={handleDarkTheme} />
      <SvgLogo
        style={{
          fill: 'var(--main-text-color)',
          width: '106px',
          height: '24px',
          marginLeft: '10%',
          marginRight: 'auto',
          marginTop: '58px',
          marginBottom: '70px',
        }}
      />
      <CloseBtn onClick={() => handleShowMenu(false)}>
        <Svg>
          <use href={Icons + '#icon-close-20'} />
        </Svg>
      </CloseBtn>
      <Section onClick={() => handleShowMenu(false)}>
        <MainMenu />
      </Section>
    </ControlWrapper>
  );
};

export default MobileMenu;
