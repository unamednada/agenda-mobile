import React from 'react';
import { DropDown, CheckBox } from '../../components/';

export default function Agenda({ title, dropDownProps, checkBoxProps }) {
  const {
    options: dropDownOptions,
    onChange: onDropDownChange,
    value,
  } = dropDownProps;

  const {
    options: checkBoxOptions,
    onChange: onCheckBoxChange,
  } = checkBoxProps;

  return (
    <div>
      <h1>{ title }</h1>
      <DropDown options={dropDownOptions} onChange={onDropDownChange} value={value} />
      <CheckBox options={checkBoxOptions} onChange={onCheckBoxChange} />
    </div>
  );
}
