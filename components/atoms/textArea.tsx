"use client";
import React, {ReactNode} from 'react';
import { styled } from '@mui/material/styles';

interface Props {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  name?: string;
  maxlength?: number;
  minlength?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: string, event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string) => void;
  readOnly?: boolean;
}

function TextArea(props: Props) {

  return (
    <TextArea2
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      readOnly={props.readOnly}
    >
    </TextArea2>
  );
}

const TextArea2 = styled('textarea')({
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '311px',
  height: `280px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: '10px',
  border: `1px solid rgba(202, 209, 225, 1)`,
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(149, 161, 187, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  paddingLeft: '15px',
  textTransform: `none`,
  ':focus': {
    border: '2px solid #007bff',
  },
});

export default TextArea;
