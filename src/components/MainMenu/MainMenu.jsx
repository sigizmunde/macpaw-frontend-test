import { useModeContext } from 'components/App';
import { MenuBtn, MenuItem, MenuLink, MenuList } from './MainMenu.styled';

const MainMenu = () => {
  const { mode, setMode } = useModeContext();

  return (
    <MenuList className="main_menu">
      <MenuItem active={mode === 'voting'}>
        <MenuLink color="blue" onClick={() => setMode('voting')}>
          <img src={require('../../images/vote-table.png')} alt="voting" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => setMode('voting')}>
          Voting
        </MenuBtn>
      </MenuItem>
      <MenuItem active={mode === 'breeds'}>
        <MenuLink color="green" onClick={() => setMode('breeds')}>
          <img src={require('../../images/pet-breeds.png')} alt="breeds" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => setMode('breeds')}>
          Breeds
        </MenuBtn>
      </MenuItem>
      <MenuItem active={mode === 'gallery'}>
        <MenuLink color="yellow" onClick={() => setMode('gallery')}>
          <img src={require('../../images/images-search.png')} alt="gallery" />
        </MenuLink>
        <MenuBtn type="button" onClick={() => setMode('gallery')}>
          Gallery
        </MenuBtn>
      </MenuItem>
    </MenuList>
  );
};

export default MainMenu;
