import css from './Logo.module.css';
import { ReactComponent as SvgLogo } from '../../images/logo.svg';

const Logo = ({ onClick }) => {
  return (
    <>
      <SvgLogo className={css.logo_svg} onClick={onClick} />
    </>
  );
};

export default Logo;
