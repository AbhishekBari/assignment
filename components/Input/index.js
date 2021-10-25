import React from 'react';
import {TextInput, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';

const Input = ({
  field: {value, name},
  form: {handleChange, handleBlur, touched, errors},
  innerRef,
  ...rest
}) => {
  return (
    <View style={{margin: 8}}>
      <TextInput
        ref={innerRef}
        style={styles.input}
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <Typography variant="error">{errors[name]}</Typography>
      )}
    </View>
  );
};

export default Input;
