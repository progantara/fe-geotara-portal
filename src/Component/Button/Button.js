import React from 'react';
import '../../Assets/Css/custom/custom.css';

function Button(props) {
  const { size, width, children, ...rest } = props;

  // definisi kelas CSS berdasarkan ukuran tombol
  const className = `button button-${size} ${width === 'full' ? 'button-full' : ''}`;

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