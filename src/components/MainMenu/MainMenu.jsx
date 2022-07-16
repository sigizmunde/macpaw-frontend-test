import { MenuBtn, MenuItem, MenuLink, MenuList } from './MainMenu.styled';

const MainMenu = ({ onClick }) => {
  return (
    <MenuList className="main_menu">
      <MenuItem>
        <MenuLink color="blue" onClick={() => onClick('voting')}>
          <img src={require('../../images/vote-table.png')} alt="voting" />
        </MenuLink>
        <MenuBtn type="button">Voting</MenuBtn>
      </MenuItem>
      <MenuItem>
        <MenuLink color="green" onClick={() => onClick('breeds')}>
          <img src={require('../../images/pet-breeds.png')} alt="breeds" />
        </MenuLink>
        <MenuBtn type="button">Breeds</MenuBtn>
      </MenuItem>
      <MenuItem>
        <MenuLink color="yellow" onClick={() => onClick('gallery')}>
          <img src={require('../../images/images-search.png')} alt="gallery" />
        </MenuLink>
        <MenuBtn type="button">Gallery</MenuBtn>
      </MenuItem>
    </MenuList>
  );
};

export default MainMenu;
