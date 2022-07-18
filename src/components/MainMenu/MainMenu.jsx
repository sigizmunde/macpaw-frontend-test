import { MenuBtn, MenuNavLink, MenuLink, MenuList } from './MainMenu.styled';

const MainMenu = () => {
  return (
    <MenuList className="main_menu">
      <MenuNavLink to="/voting">
        <MenuLink color="blue">
          <img src={require('../../images/vote-table.png')} alt="voting" />
        </MenuLink>
        <MenuBtn type="button">Voting</MenuBtn>
      </MenuNavLink>
      <MenuNavLink to="/breeds">
        <MenuLink color="green">
          <img src={require('../../images/pet-breeds.png')} alt="breeds" />
        </MenuLink>
        <MenuBtn type="button">Breeds</MenuBtn>
      </MenuNavLink>
      <MenuNavLink to="/gallery">
        <MenuLink color="yellow">
          <img src={require('../../images/images-search.png')} alt="gallery" />
        </MenuLink>
        <MenuBtn type="button">Gallery</MenuBtn>
      </MenuNavLink>
    </MenuList>
  );
};

export default MainMenu;
