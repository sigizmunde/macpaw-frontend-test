import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  list-style: none;
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
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
`;

export const MenuItem = styled.li`
  display: block;
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
  ${MenuLink} {
    ${props => props.active && `border: 4px solid var(--faded-accent-color);`}
  }
  ${MenuBtn} {
    ${props =>
      props.active &&
      `color: var(--inverted-text-color);
    background-color: var(--accent-color);`}
  }
`;
