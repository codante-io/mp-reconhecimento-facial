import styled from 'styled-components';

export const EmojiContainer = styled.div`
  width: max-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    > img.emoji-img {
      width: 280px;
      height: 280px;
    }

    > img.balloon-img {
      width: 340px;
      height: 175px;
    }
  }
`;
