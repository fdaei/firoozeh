import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as yup from 'yup';
import list from './list';
function singup() {
    const validate = yup.object().shape({
        FirstName: yup.string().required('Required')
        .max(15,'must be lessthan 16 characters') ,
        LastName: yup.string().required('Required')
        .max(20,'must be lessthan 20 characters') ,
        email: yup.string().email('email is invalid')
        .required(' email is Required'),    
         PassWord:yup.string()
        .max(6,'must be lessthan 16 characters') 
        .required(' password is Required'),
        ConfirmPasaword:yup.string()
        .oneOf([yup.ref('password'),null],'password must match')
        .required('Confirm password is requyired')
      });
    return (
        <Formik
            initialValues={{
                FirstName: '',
                LastName: '',
                Email: '',
                PassWord: '',
                ConfirmPasaword: ''
            }}
            validationSchema={validate}
            onSubmit={values=>{
                const [list, setlist] = useState('')
                values.map((index)=>(
                    setlist(index)
                ))
            }
            }
         >
            {formik => (
                <div>
                    <h1 className='my-4 font-weight-bold-display-4'> SignUp </h1>
                    {console.log(formik.values)}
                    <Form>
                       <TextField label='FirstName' name='FirstName' type='text' />
                       <TextField label='LastName' name='LastName' type='text' />
                       <TextField label='Email' name='Email' type='email' />
                       <TextField label='PassWord' name='PassWord' type='password' />
                       <TextField label='ConfirmPasaword:' name='ConfirmPasaword' type='password' />
                       <button className='btn btn-dark mt-3' type='submit'>Register</button>
                       <button className='btn btn-danger mt-3 ml-3' type='reset'>Reset</button> 
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default singup
