import MainMenu from 'components/MainMenu/MainMenu';
import css from './ControlSection.module.css';

const ControlSection = () => {
  return (
    <section className={css.control_section}>
      <h1 className={css.heading}>Hi intern!</h1>
      <p className={css.description}>Welcome to MI 2022 Front-end test</p>
      <p className={css.motto}>Lets start using The Dog API</p>
      <MainMenu />
    </section>
  );
};

export default ControlSection;
