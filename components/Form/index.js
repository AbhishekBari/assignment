import {Field, Formik} from 'formik';
import React from 'react';
import Button from '../Button';

const Form = ({fields, btnProps, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit}) => (
        <>
          {fields.map(x => (
            <Field key={x.name} {...x} />
          ))}
          <Button {...btnProps} onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default Form;
