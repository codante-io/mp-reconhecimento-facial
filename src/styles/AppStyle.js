import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  /* gap: 3rem; */

  > section.webcam-container {
    width: max-content;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    > canvas {
      position: absolute;
      margin-top: 4rem;
    }
  }

  > section.emoji-container {
    margin-left: 3rem;
    width: 350px;
    height: 500px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;
