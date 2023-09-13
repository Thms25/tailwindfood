import Image from 'next/image';
import React from 'react';

const RecipeCard = ({src}) => {
  return (
    <div>
      <Image
        src={src}
        width={300}
        height={300}
        alt="recipe picture"
      />
      <div>
        <span>Spaguettit Bolognese</span>
        <span>recipe by thom thom</span>
      </div>
    </div>
  );
}

export default RecipeCard;
