import * as React from 'react';

import './TextArea.scss';

export interface IProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string,
}

const TextArea = (props: IProps) => {
  return (
    <div className="TextArea">
      <textarea onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default TextArea;
