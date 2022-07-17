import { useModeContext } from 'components/App';
import { MenuBtn, MenuItem, MenuLink, MenuList } from './MainMenu.styled';

const MainMenu = ({ onClick }) => {
  const mode = useModeContext();

  return (
    <MenuList className="main_menu">
      <MenuItem active={mode === 'voting' && true}>
        <MenuLink color="blue" onClick={() => onClick('voting')}>
          <img src={require('../../images/vote-table.png')} alt="voting" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => onClick('voting')}>
          Voting
        </MenuBtn>
      </MenuItem>
      <MenuItem active={mode === 'breeds' && true}>
        <MenuLink color="green" onClick={() => onClick('breeds')}>
          <img src={require('../../images/pet-breeds.png')} alt="breeds" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => onClick('breeds')}>
          Breeds
        </MenuBtn>
      </MenuItem>
      <MenuItem active={mode === 'gallery' && true}>
        <MenuLink color="yellow" onClick={() => onClick('gallery')}>
          <img src={require('../../images/images-search.png')} alt="gallery" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => onClick('gallery')}>
          Gallery
        </MenuBtn>
      </MenuItem>
    </MenuList>
  );
};

export default MainMenu;
