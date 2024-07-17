import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');

    document.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseover', () => {
        cursorInner.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorInner.classList.remove('hover');
      });
    });
  }, []);

  return (
    <div className="cursor">
      <div className="cursor-inner"></div>
    </div>
  );
};

export default CustomCursor;
