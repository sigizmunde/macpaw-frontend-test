import { FadedBtn, PanelBtn } from 'components/StyledBlocks/StyledBlocks';
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
`;

export const MenuBtn = styled(PanelBtn)`
  @media (min-width: 1024px) {
    display: none;
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
