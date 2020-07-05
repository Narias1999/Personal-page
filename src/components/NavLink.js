import React from 'react';

export function NavLink({ to, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const { offsetTop } = document.querySelector(to);
    window.scroll({
      behavior: 'smooth',
      top: offsetTop - 150,
    });
  };
  return (
    <a href='' onClick={handleClick}>
      {children}
    </a>
  );
}
