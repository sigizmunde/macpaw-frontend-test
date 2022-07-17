import { useState } from 'react';
import { PanelBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import {
  HeaderDiv,
  MenuBtn,
  Label,
  Input,
  SearchBtn,
} from './HeaderForm.styled';
import Icons from 'images/icons/symbol-defs.svg';

const HeaderForm = ({ onBreedSearch }) => {
  const [breedSearch, setBreedSearch] = useState('');

  const onBreedInput = e => {
    setBreedSearch(e.target.value);
  };

  const onBreedClick = () => {
    onBreedSearch(breedSearch);
    setBreedSearch('');
  };

  return (
    <HeaderDiv>
      <MenuBtn>
        <Svg>
          <use href={Icons + '#icon-menu'} />
        </Svg>
      </MenuBtn>
      <Label>
        <Input
          type="text"
          name="breedSearch"
          value={breedSearch}
          onChange={onBreedInput}
        />
        <SearchBtn type="button" onClick={onBreedClick}>
          <Svg>
            <use href={Icons + '#icon-search-20'} />
          </Svg>
        </SearchBtn>
      </Label>
      <PanelBtn type="button">
        <Svg>
          <use href={Icons + '#icon-like-30'} />
        </Svg>
      </PanelBtn>
      <PanelBtn type="button">
        <Svg>
          <use href={Icons + '#icon-fav-30'} />
        </Svg>
      </PanelBtn>
      <PanelBtn type="button">
        <Svg>
          <use href={Icons + '#icon-dislike-30'} />
        </Svg>
      </PanelBtn>
    </HeaderDiv>
  );
};

export default HeaderForm;
