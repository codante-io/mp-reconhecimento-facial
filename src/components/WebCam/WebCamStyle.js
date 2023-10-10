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
    max-width: 300px;
    max-height: 400px;

    border: 10px solid ${({ theme }) => theme.border};
    border-radius: 7px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.border};
  }

  > img {
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .webcam {
    margin-top: 4rem;

    @media (max-width: 700px) {
      margin-top: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
