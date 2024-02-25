import React from "react";
import { styled } from "@mui/material/styles";

// Propsの型定義を追加
interface InputPullDownProps {
  defaultValue?: string; // defaultValueをオプショナルのプロパティとして追加
}

// Propsを受け取るように関数コンポーネントを修正
function InputPullDown({ defaultValue }: InputPullDownProps): JSX.Element {
  return (
    // defaultValueをselect要素に渡す
    <InputPullDownContainer defaultValue={defaultValue} name="estimate-category">
      <option value="">カテゴリー(言語)</option>
      <option value="PHP">PHP</option>
      <option value="React">React</option>
      <option value="Java">Java</option>
      <option value="Node.js">Node.js</option>
    </InputPullDownContainer>
  );
}

const InputPullDownContainer: any = styled("select")({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: "311px",
  height: `35px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `10px`,
  border: `1px solid rgba(202, 209, 225, 1)`,
  color: `rgba(149, 161, 187, 1)`,
});

export default InputPullDown;
