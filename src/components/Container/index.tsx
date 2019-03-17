import * as React from 'react';

import './Container.scss';

export interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container = (props: IProps) => {
  return (
    <div className={`Container ${props.className || ''}`}>{props.children}</div>
  );
};

export default Container;
