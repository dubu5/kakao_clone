import React, { useState, ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATHS } from '~/constants';
import { signup } from '~/apis/auth';
import InputBlock from './InputBlock';

const Wrapper = styled.main`
  width: 100%;
  
  & button {
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 16px 5px;
    border: 1px solid #E0E0E0;
    
    background-color: #ffeb33;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Content: React.FC = () => { 
  const MAX_LEN = 20;
  
  const navigate = useNavigate(); 
  
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [name, setName] = useState('');

  const [userIdError, setUserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPasswordError, setCheckPasswordError] = useState('');
  const [nameError, setNameError] = useState('');

  const onUserIdChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setUserId(value);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setPassword(value);
  };
  const onCheckPasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setCheckPassword(value);
  };
  const onNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const value = event.target.value;
    setName(value);
  };

  const isMatchUserId = (): boolean => {
    const regExp = /^[0-9a-z]+$/;
    const isMatch = userId.match(regExp);
    return isMatch ? true : false;
  };
  const isValidUserId = async () => {
    const len = userId.length;
    if (len < 5 || !isMatchUserId()) {
      setUserIdError('5 ~ 20자의 영문 소문자, 숫자만 사용 가능합니다.');
      return false;
    }
    setUserIdError('');
    return true;
  };
  const isValidPassword = (): boolean => {
    const len = password.length;
    if (len < 5) {
      setPasswordError('5 ~ 20자 입력해 주세요.');
      return false;
    }
    setPasswordError('');
    return true;
  };
  const isValidCheckPassword = (): boolean => {
    if (checkPassword !== password) {
      setCheckPasswordError('비밀번호가 일치하지 않습니다.');
      return false;
    }
    setCheckPasswordError('');
    return true;
  };
  const isValidName = (): boolean => {
    const len = name.length;
    if (len === 0) {
      setNameError('필수 정보입니다.');
      return false;
    }
    setNameError('');
    return true;
  };

  // 입력창에서 벗어났을 때
  const onUserIdBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidUserId();
  };
  const onPasswordBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidPassword();
  };
  const onCheckPasswordBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidCheckPassword();
  };
  const onNameBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    isValidName();
  };

  // 최종 반환하는 부분
  const onSubmit = async () => {
    // 유효성 검사
    const validId = await isValidUserId();
    const validPassword = isValidPassword();
    const validCheckPassword = isValidCheckPassword();
    const validName = isValidName();

    if (validId && validPassword && validCheckPassword && validName) {
      try {
        await signup({ userId, password: password, name });
        await alert('회원 가입 되었습니다.');
        navigate(PAGE_PATHS.LOGIN, { replace: true }); 
      } catch (err) {
        alert('회원 가입에 실패하였습니다.');
      }
    }
  };
  return (
        <Wrapper>
            <InputBlock
                label="아이디"
                type="text"
                placeholder="아이디(5 ~ 20자 사이 영문 소문자, 숫자)"
                value={userId}
                maxLength={MAX_LEN}
                errorMessage={userIdError}
                onChange={onUserIdChange}
                onBlur={onUserIdBlur}
            />
            <InputBlock
                label="비밀번호"
                type="password"
                placeholder="비밀번호(5 ~ 20자 사이)"
                value={password}
                maxLength={MAX_LEN}
                errorMessage={passwordError}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
                autoComplete="new-password"
            />
            <InputBlock
                label="비밀번호 재확인"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해 주세요"
                value={checkPassword}
                maxLength={MAX_LEN}
                errorMessage={checkPasswordError}
                onChange={onCheckPasswordChange}
                onBlur={onCheckPasswordBlur}
                autoComplete="new-password"
            />
            <InputBlock
                label="이름"
                type="text"
                placeholder="이름"
                value={name}
                maxLength={MAX_LEN}
                errorMessage={nameError}
                onChange={onNameChange}
                onBlur={onNameBlur}
            />
            
            <button onClick={onSubmit}>가입하기</button>
        </Wrapper>
    );
};

export default Content;