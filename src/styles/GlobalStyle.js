import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
      font-family: MochyPopOne;
      src: url('/fonts/MochiyPopOne.ttf') format('truetype');
    }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: MochyPopOne, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.gradient};
      border-radius: 10px;
      cursor: pointer;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.border};
    }
  }

  body {
    background: ${({ theme }) => theme.gradient};
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  
  #root {
    background-image: url('/images/ondas.png');
    background-repeat: no-repeat;
    background-size: 100% 70%;
    background-position: bottom;
    
    min-height: 100vh;
    width: 100vw;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 3.2em;
    line-height: 1.1;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    > img {
      width: 100px;
    }
  }

  img {
    max-width: 100%;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1rem;
    text-align: center;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    > img {
      width: 20px;
      height: 20px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem auto;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 85rem;

    @media (max-width: 700px) {
      gap: 2rem;
    }
  }
`;
