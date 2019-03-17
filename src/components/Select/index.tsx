import * as React from 'react';

import './Select.scss';

interface IOption {
  label: string;
  value: string;
}

interface IInjectedProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
}

export type IProps = IInjectedProps;

export default class Select extends React.PureComponent<IProps> {
  renderOption = (option: IOption) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  };

  render() {
    return (
      <div className="Select">
        <select onChange={this.props.onChange}>
          {this.props.options.map(this.renderOption)}
        </select>
      </div>
    );
  }
}
