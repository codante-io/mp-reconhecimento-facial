import React from 'react';
import proptypes from 'prop-types';
import { EmojiContainer } from './EmojiStyle';

function Emoji({ message }) {
  const renderEmoji = () => {
    if (message === 'Você parece feliz!') {
      return '/images/happy.svg';
    }
    if (message === 'Você parece triste.') {
      return '/images/sad.svg';
    }
    if (message === 'Você parece surpreso!') {
      return '/images/surprised.svg';
    }
    return '/images/normal.svg';
  };

  return (
    <EmojiContainer>
      <div>
        <p>{message}</p>
        <img className="balloon-img" src="/images/balloon.svg" alt="normal balloon" />
      </div>
      <img className="emoji-img" src={renderEmoji()} alt="Figura de um emoji" />
    </EmojiContainer>
  );
}

Emoji.propTypes = {
  message: proptypes.string.isRequired,
};

export default Emoji;
