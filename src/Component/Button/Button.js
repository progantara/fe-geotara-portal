import React from 'react';
import '../../Assets/Css/custom/custom.css';

function Button(props) {
  const { size, width, children, ...rest } = props;

  // definisi kelas CSS berdasarkan ukuran tombol
  const className = `hover:bg-green-800 focus:ring-4 focus:ring-green-300 button button-${size} ${width === 'full' ? 'button-full' : ''}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'default',
  width: 'auto'
};

export default Button;