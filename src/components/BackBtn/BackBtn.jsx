import { FadedBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Icons from 'images/icons/symbol-defs.svg';

const BackBtn = ({ destination }) => {
  let history = createBrowserHistory();

  return (
    <FadedBtn
      onClick={() => {
        history.back();
      }}
    >
      <Svg>
        <use href={Icons + '#icon-back-20'} />
      </Svg>
    </FadedBtn>
  );
};

BackBtn.propTypes = { destination: PropTypes.string.isRequired };

export default BackBtn;
