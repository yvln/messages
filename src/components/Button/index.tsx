import * as React from 'react';

import './Button.scss';

export interface IProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props: IProps) => {
  return (
    <div className="Button">
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
