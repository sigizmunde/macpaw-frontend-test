import { FadedBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import { createBrowserHistory } from 'history';
import Icons from 'images/icons/symbol-defs.svg';

const BackBtn = () => {
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

export default BackBtn;
