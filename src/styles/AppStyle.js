import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @media (max-width: 700px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

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

      @media (max-width: 700px) {
        margin-top: 0;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
      }
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

    @media (max-width: 700px) {
      margin: 0;
      width: 100%;
      height: 260px;
    }
  }
`;
