import styled from 'styled-components';

export const WebCamContainer = styled.div`
  width: 690px;
  height: 650px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  > img {
    position: absolute;
    top: 0;
    left: 5px;
    z-index: 1;
  }

  .webcam {
    margin-top: 4rem;
  }
`;
