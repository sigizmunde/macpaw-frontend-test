import css from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <ul className={css.main_menu}>
      <li className={css.menu_item}>
        <div className={css.voting}>
          <img src={require('../../images/vote-table.png')} alt="voting"></img>
        </div>
        <button type="button" className={css.menu_btn}>
          Voting
        </button>
      </li>
      <li className={css.menu_item}>
        <div className={css.breeds}>
          <img src={require('../../images/pet-breeds.png')} alt="breeds"></img>
        </div>
        <button type="button" className={css.menu_btn}>
          Breeds
        </button>
      </li>
      <li className={css.menu_item}>
        <div className={css.gallery}>
          <img
            src={require('../../images/images-search.png')}
            alt="gallery"
          ></img>
        </div>
        <button type="button" className={css.menu_btn}>
          Gallery
        </button>
      </li>
    </ul>
  );
};

export default MainMenu;
