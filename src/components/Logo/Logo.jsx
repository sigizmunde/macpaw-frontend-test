import css from './Logo.module.css';
import { ReactComponent as SvgLogo } from '../../images/logo.svg';

const Logo = () => {
  return (
    <>
      <SvgLogo className={css.logo_svg} />
    </>
  );
};

export default Logo;
