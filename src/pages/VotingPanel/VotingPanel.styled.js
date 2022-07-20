import styled from 'styled-components';

export const VotingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 0 52px;
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
  z-index: 1300;
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

export const LogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.3em;
  }
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--faded-accent-color);
    outline: none;
  }
`;

export const LogItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: stretch;
  align-items: center;
  padding: 15px;
  background-color: var(--back-color);
  border-radius: 20px;
  color: var(--secondary-text-color);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  & div {
    flex-grow: 0;
    & span {
      font-weight: 500;
      color: var(--main-text-color);
    }
  }
  div:nth-child(2) {
    flex-grow: 1;
  }
`;

export const TimeStamp = styled.div`
  min-width: 60px;
  height: 30px;
  padding: 3px 0;
  color: var(--main-text-color);
  background-color: var(--panel-back-color);
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;
