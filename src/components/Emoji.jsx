import React from 'react';
import proptypes from 'prop-types';

function Emoji({ message }) {
  const renderEmoji = () => {
    if (message === 'Você parece feliz!') {
      return '😃';
    }
    if (message === 'Você parece triste.') {
      return '😢';
    }
    if (message === 'Você parece surpreso!') {
      return '😮';
    }
    return '😐';
  };

  return (
    <div className="emoji">
      <span style={{ fontSize: '100px' }}>{renderEmoji()}</span>
      <p>{message}</p>
    </div>
  );
}

Emoji.propTypes = {
  message: proptypes.string.isRequired,
};

export default Emoji;
