import styled from 'styled-components';

export const EmojiContainer = styled.div`
  width: max-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 700px) {
    gap: 1rem;
  }

  > img.emoji-img {
    width: 280px;
    height: 280px;

    @media (max-width: 700px) {
      width: 140px;
      height: 140px;
    }
  }

  > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;

    > p {
      position: absolute;
      margin-bottom: 2rem;
      width: 200px;

      @media (max-width: 700px) {
        width: 100px;
        font-size: 14px;
      }
    }

    > img.balloon-img {
      width: 340px;
      height: 175px;

      @media (max-width: 700px) {
        width: 167px;
        height: 107px;
      }
    }
  }
`;
