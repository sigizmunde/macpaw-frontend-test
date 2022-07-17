import { FadedBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import { useModeContext } from 'components/App';
import PropTypes from 'prop-types';
import Icons from 'images/icons/symbol-defs.svg';

const BackBtn = ({ destination }) => {
  const { mode, setMode } = useModeContext();

  return (
    <FadedBtn
      onClick={() => {
        destination !== mode && setMode(destination);
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
