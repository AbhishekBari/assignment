import {createRef} from 'react';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

const passwordInputRef = createRef();
const numberInputRef = createRef();

export const fields = [
  {
    placeholder: 'Email',
    keyboardType: 'email-address',
    autoCapitalize : 'none',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    name: 'username',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    innerRef: passwordInputRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },

  {
    placeholder: 'Mobile Number',
    returnKeyType: 'next',
    keyboardType: 'numeric',

    innerRef: numberInputRef,
    name: 'mobileNumber',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }else if (value.length != 10){
        return 'Please enter valid mobile number'
      }
      return '';
    },
  },

  
  {
    title: 'Remember Me?',
    containerStyle: {alignSelf: 'flex-end', margin: 10, color: 'green'},
    component: Checkbox,
    name: 'rememberMe',
  },
];

export const loginInitialValues = {
  username: '',
  password: '',
  mobileNumber: '',
  rememberMe: false,
};
