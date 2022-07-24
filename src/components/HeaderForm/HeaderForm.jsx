import { useState } from 'react';
import { FlipFlex, PanelBtn, Svg } from 'components/StyledBlocks/StyledBlocks';
import {
  HeaderDiv,
  MenuBtn,
  Label,
  Input,
  SearchBtn,
  HeaderNavLink,
} from './HeaderForm.styled';
import Icons from 'images/icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';

const HeaderForm = ({ handleShowMenu }) => {
  const [breedSearch, setBreedSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    !!breedSearch &&
      navigate(`/search/?query=${breedSearch.toLowerCase()}`, {
        replace: true,
      });
    setBreedSearch('');
  };

  const handleInput = e => {
    setBreedSearch(e.target.value);
  };

  return (
    <HeaderDiv onSubmit={handleSearch}>
      <MenuBtn type="button" onClick={() => handleShowMenu(show => !show)}>
        <Svg>
          <use href={Icons + '#icon-menu'} />
        </Svg>
      </MenuBtn>

      <FlipFlex>
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

        <HeaderNavLink to="likes">
          <PanelBtn type="button">
            <Svg>
              <use href={Icons + '#icon-like-30'} />
            </Svg>
          </PanelBtn>
        </HeaderNavLink>
        <HeaderNavLink to="favourites">
          <PanelBtn type="button">
            <Svg>
              <use href={Icons + '#icon-fav-30'} />
            </Svg>
          </PanelBtn>
        </HeaderNavLink>
        <HeaderNavLink to="dislikes">
          <PanelBtn type="button">
            <Svg>
              <use href={Icons + '#icon-dislike-30'} />
            </Svg>
          </PanelBtn>
        </HeaderNavLink>
      </FlipFlex>
    </HeaderDiv>
  );
};

export default HeaderForm;
