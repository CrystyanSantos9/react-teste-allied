import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().min(2, 'É necessário mais de 2 caracteres').required('Nome é necessário'),
    email: Yup.string().email().required()
})
