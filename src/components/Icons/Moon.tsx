import React from 'react'

function Moon({ className = '', fill = '' }) {
  return (
    <svg
      className={className}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 13.5C9.12808 10.627 9.42505 5.69941 10.8865 2.16666C8.85522 2.56749 6.91497 3.55441 5.3398 5.12957C1.10939 9.35999 1.10939 16.2197 5.3398 20.4501C9.5713 24.6816 16.4299 24.6805 20.6614 20.4501C22.2366 18.8749 23.2224 16.9357 23.6243 14.9045C20.0905 16.3648 14.8719 16.3719 12 13.5Z"
        fill={fill}
      />
    </svg>
  )
}

export default Moon
