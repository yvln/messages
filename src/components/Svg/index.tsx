import * as React from 'react';

export interface IProps {
  height: number;
  name: string;
  width: number;
}

const lib: { [key: string]: string } = {
  arrowRight: 'M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z',
};

const Svg = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
    >
      <path d={lib[props.name]} />
    </svg>
  );
};

export default React.memo<IProps>(Svg);
