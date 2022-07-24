import { maxMobile } from 'components/utility/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  width: 446px;
  @media screen and (max-width: ${maxMobile}px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 10px;
  width: 138px;
  height: 198px;
  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, 0.6);
  background-color: ${({ color }) => {
    switch (color) {
      case 'blue':
        return 'var(--accent-blue-color)';
      case 'yellow':
        return 'var(--accent-yellow-color)';
      case 'green':
        return 'var(--accent-green-color)';
      default:
        return 'var(--accent-color)';
    }
  }};
  @media screen and (max-width: ${maxMobile}px) {
    display: none;
  }
`;

export const MenuBtn = styled.button`
  width: 100%;
  height: 36px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent-color);
  background-color: var(--panel-back-color);
  border: none;
  border-radius: 10px;
  @media screen and (max-width: ${maxMobile}px) {
    width: 270px;
    margin: 10px auto;
  }
`;

export const MenuNavLink = styled(NavLink)`
  display: block;
  margin: 0;
  padding: 0;
  :hover ${MenuLink} {
    border: 4px solid rgba(255, 255, 255, 1);
  }
  :active ${MenuLink} {
    border: 4px solid var(--faded-accent-color);
  }
  :hover ${MenuBtn} {
    background-color: var(--faded-accent-color);
  }
  :active ${MenuBtn} {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
  &.active ${MenuLink} {
    border: 4px solid var(--faded-accent-color);
  }
  &.active ${MenuBtn} {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
`;
