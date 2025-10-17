import React, { ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.label`
  display: block;
  width: 80%;
  margin: 0 auto 20px auto; 

  & h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  & span {
    display: block;
    background-color: #fff;
    padding: 16px 5px;
    border: 1px solid #E0E0E0;
    
    & input {
      border: none;
      width: 100%;
      outline: 0;
      padding: 0 15px;
    }
  }
  & p {
    color: red;
  }
`;

interface InputBlockProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  maxLength: number;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ 
  label, type, placeholder, value, maxLength, errorMessage, onChange, onBlur, autoComplete 
}) => {
  return (
    <LabelWrapper>
      <h3>{label}</h3>
      <span>
        <input
          type={type}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
        />
      </span>
      <p>{errorMessage}</p>
    </LabelWrapper>
  );
};

export default InputBlock;