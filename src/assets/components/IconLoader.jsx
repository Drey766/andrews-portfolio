import React from 'react';

function IconLoader() {
  return (
    <div>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>Loader Logo</title>
        <g>
          <g >
          <text id="B"  x='50%' y='50%' textAnchor='middle' dominantBaseline='middle' fill='var(--green)' fontWeight='bold' fontSize='46px'>A</text>






          </g>
          <path
            stroke="var(--green)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
                        L 11, 27
                        L 11, 72
                        L 50, 95
                        L 89, 73
                        L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
}

export default IconLoader; // Add this line to export the component

