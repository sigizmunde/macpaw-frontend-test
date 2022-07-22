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
import { useNavigate } from 'react-router-dom';

const HeaderForm = () => {
  const [breedSearch, setBreedSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    !!breedSearch && navigate(`/search/?query=${breedSearch.toLowerCase()}`);
    setBreedSearch(''); //-------------
  };

  const handleInput = e => {
    setBreedSearch(e.target.value);
  };

  return (
    <HeaderDiv onSubmit={handleSearch}>
      <MenuBtn>
        <Svg>
          <use href={Icons + '#icon-menu'} />
        </Svg>
      </MenuBtn>

      <Label>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          value={breedSearch}
          onChange={handleInput}
        />
        <SearchBtn type="submit" onClick={handleSearch}>
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
