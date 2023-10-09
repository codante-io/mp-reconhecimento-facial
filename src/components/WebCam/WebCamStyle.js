import styled from 'styled-components';

export const WebCamContainer = styled.div`
  width: 690px;
  height: 650px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 700px) {
    width: 275px;
    height: 260px;
  }

  > img {
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .webcam {
    margin-top: 4rem;

    @media (max-width: 700px) {
      margin-top: 2rem;
      width: 230px;
      height: 160px;
    }
  }
`;
