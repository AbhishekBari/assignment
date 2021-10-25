import React from 'react';
import {View, Keyboard} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {fields, loginInitialValues} from './fields';

const Login = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
          navigation.navigate('Home');
        }}
        btnProps={{
          title: 'Login',
        }}
      />
      <Typography style={{textAlign: 'center', marginVertical: 10, color: 'green'}}>
        Don't Have Acount? Please{` `}
        <Typography
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Typography>
      </Typography>
    </View>
  );
};

export default Login;
