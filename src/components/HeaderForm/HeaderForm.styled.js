import { FadedBtn, PanelBtn } from 'components/StyledBlocks/StyledBlocks';
import { maxMobile, minDesktop } from 'components/utility/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderDiv = styled.form`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 10px 10px 0 10px;
  @media screen and (max-width: ${maxMobile}px) {
    padding: 0;
    flex-wrap: wrap;
    justify-content: start;
  }
`;

export const MenuBtn = styled(PanelBtn)`
  @media screen and (min-width: ${minDesktop}px) {
    display: none;
  }
  @media screen and (max-width: ${maxMobile}px) {
    position: absolute;
  }
`;

export const Input = styled.input`
  width: 100%;
  font: var(--form-text);
  background-color: var(--panel-back-color);
  border: none;
  border-radius: 20px;
  padding: 15px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 100%;
  padding: 0;
  background-color: var(--panel-back-color);
  border-radius: 20px;
`;

export const SearchBtn = styled(FadedBtn)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

export const HeaderNavLink = styled(NavLink)`
  &.active > button {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
`;
