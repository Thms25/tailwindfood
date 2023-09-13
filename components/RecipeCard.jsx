import Image from 'next/image';
import React from 'react';

const RecipeCard = ({src}) => {
  return (
    <div className='card'>
      <Image
        src={src}
        width={450}
        height={450}
        alt="recipe picture"
        className='object-cover h-48 w-96'
      />

      <div className='p-2'>
        <p>Spaguettit Bolognese</p>
        <p>By Thom Thom</p>
      </div>

      <div className='badge flex items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <span className='ml-1'>25mins</span>
      </div>
    </div>
  );
}

export default RecipeCard;
