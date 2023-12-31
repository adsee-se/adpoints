import React from 'react';
import { styled } from '@mui/material/styles';

const InputPullDownContainer: any = styled('select')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '311px',
  height: `35px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `10px`,
  border: `1px solid rgba(202, 209, 225, 1)`,
  color: `rgba(149, 161, 187, 1)`,
});

function InputPullDown(): JSX.Element {
  return (
    <InputPullDownContainer name="estimate-category">
      <option value="">カテゴリー(言語)</option>
      <option value="PHP">PHP</option>
      <option value="React">React</option>
      <option value="Java">Java</option>
      <option value="Node.js">Node.js</option>
    </InputPullDownContainer>
  );
}

export default InputPullDown;
