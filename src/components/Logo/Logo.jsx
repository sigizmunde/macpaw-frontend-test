import css from './Logo.module.css';
import { ReactComponent as SvgLogo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className={css.styled_link} to="/">
      <SvgLogo className={css.logo_svg} />
    </Link>
  );
};

export default Logo;
