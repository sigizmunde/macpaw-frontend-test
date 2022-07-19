import styled from 'styled-components';

export const VotingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 360px;
  min-height: 120px;
  background-color: var(--back-color);
  border-radius: 20px;
  overflow: hidden;

  img {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 115%;
  }
`;

export const OverlayControlPanel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: auto;
  min-height: 30px;
  background-color: var(--panel-back-color);
  border-radius: 20px;
  border: solid 5px var(--panel-back-color);
  overflow: hidden;

  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;

const ControlBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 90px;
  font-size: 26px;
  color: var(--inverted-text-color);
  background-color: var(--back-color);
  cursor: pointer;
`;

export const LikeControlBtn = styled(ControlBtn)`
  background-color: var(--accent-green-color);
  :hover {
    color: var(--accent-green-color);
    background-color: var(--faded-accent-green-color);
  }
  :active {
    background-color: var(--panel-back-color);
  }
`;

export const FavControlBtn = styled(ControlBtn)`
  background-color: var(--accent-color);
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
  :active {
    background-color: var(--panel-back-color);
  }
`;

export const DislikeControlBtn = styled(ControlBtn)`
  background-color: var(--accent-yellow-color);
  :hover {
    color: var(--accent-yellow-color);
    background-color: var(--faded-accent-yellow-color);
  }
  :active {
    background-color: var(--panel-back-color);
  }
`;
