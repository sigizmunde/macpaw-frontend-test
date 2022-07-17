import { FadedBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import Icons from 'images/icons/symbol-defs.svg';

const BackBtn = () => {
  return (
    <FadedBtn>
      <Svg>
        <use href={Icons + '#icon-back-20'} />
      </Svg>
    </FadedBtn>
  );
};

export default BackBtn;
