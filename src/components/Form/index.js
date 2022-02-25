import React from 'react';
import {
  Formik, Field, Form as FormikForm, ErrorMessage,
} from 'formik';
import schema from './schema';

function Form() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  const validaCPF = (cpf) => {
    // valida o tipo de dado que foi enviado, se for numero vai retornar FALSE
    if (typeof cpf !== 'string') return false;

    // isso fara com que o cpf que for enviado seja formatado sem os "." ou "-"
    cpf = cpf.replace(/[\s.-]*/igm, '');

    // checa a quantidade de numeros que foi enviado, retorna true se for igual a 11 (que é o padrão) se não FAKSE
    if (cpf.length !== 11 || !Array.from(cpf).filter((e) => e !== cpf[0]).length) {
      return false;
    }

    let Soma;
    let Resto;

    Soma = 0;

    for (let i = 1; i <= 9; i++) Soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) Resto = 0;
    if (Resto !== parseInt(cpf.substring(9, 10), 10)) return false;

    Soma = 0;

    for (let i = 1; i <= 10; i++) Soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;

    if (Resto != parseInt(cpf.substring(10, 11))) return false;

    return cpf;
  };

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = 'Nome é obrigatório';
    }
    if (!values.email) {
      errors.email = 'Email é obrigatório';
    }
    return errors;
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        validateOnMount
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: '',
        }}
        render={({
          values, errors, touched, isValid, setFieldValue,
        }) => (
          <FormikForm>
            <div>
              <label>CPF</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </FormikForm>
        )}
      />
    </div>
  );
}

export default Form;
