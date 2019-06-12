/**
 *
 * Input
 *
 */

import * as React from 'react';

interface Props {
  type: string;
  value: string;
  placeholder: string;
  label: string;
  name: string;
  onInputChange: (name: string, value: string) => any;
}

const Input: React.FunctionComponent<Props> = props => {
  const { type, value, placeholder, label, name, onInputChange } = props;

  const onChange = (e: React.FormEvent<HTMLInputElement>): any => {
    onInputChange(e.currentTarget.name, e.currentTarget.value);
  };

  return (
    <div className='input-box form-group'>
      <label>{label}</label>
      <input
        autoComplete='off'
        type={type}
        onChange={e => {
          onChange(e);
        }}
        name={name}
        value={value}
        placeholder={placeholder}
        className={'input-text form-control'}
      />
    </div>
  );
};

export default Input;
