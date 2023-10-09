import React from 'react';
import proptypes from 'prop-types';
import { EmojiContainer } from './EmojiStyle';

function Emoji({ message }) {
  const renderEmoji = () => {
    if (message === 'Você parece feliz!') {
      return (
        <div>
          <img className="balloon-img" src="/images/happy-balloon.svg" alt="happy balloon" />
          <img className="emoji-img" src="/images/happy.svg" alt="happy emoji" />
        </div>
      );
    }
    if (message === 'Você parece triste.') {
      return (
        <div>
          <img className="balloon-img" src="/images/sad-balloon.svg" alt="sad balloon" />
          <img className="emoji-img" src="/images/sad.svg" alt="sad emoji" />
        </div>
      );
    }
    if (message === 'Você parece surpreso!') {
      return (
        <div>
          <img className="balloon-img" src="/images/surprised-balloon.svg" alt="surprised balloon" />
          <img className="emoji-img" src="/images/surprised.svg" alt="surprised emoji" />
        </div>
      );
    }
    return (
      <div>
        <img className="balloon-img" src="/images/normal-balloon.svg" alt="normal balloon" />
        <img className="emoji-img" src="/images/normal.svg" alt="normal emoji" />
      </div>
    );
  };

  return (
    <EmojiContainer>
      {renderEmoji()}
    </EmojiContainer>
  );
}

Emoji.propTypes = {
  message: proptypes.string.isRequired,
};

export default Emoji;
