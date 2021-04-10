import React, { useState } from "react"
import { Formik, Form } from "formik"
import { TextField } from "./TextField"
import * as yup from "yup"
// import list from './list';
const fields = [
  {
    name: "FirstName",
    type: "text",
  },
  {
    name: "LastName",
    type: "text",
  },
  {
    name: "Email",
    type: "email",
  },
  {
    name: "PassWord",
    type: "password",
  },
  {
    name: "ConfirmPassword",
    type: "password",
  },
]
function SignUp() {
  const [list, setList] = useState([])

  const validate = yup.object().shape({
    FirstName: yup.string().required("Required").max(15, "must be less than 16 characters"),
    LastName: yup.string().required("Required").max(20, "must be less than 20 characters"),
    Email: yup.string().email("email is invalid").required(" email is Required"),
    PassWord: yup.string().max(6, "must be less than 16 characters").required(" password is Required"),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("PassWord"), null], "password must match")
      .required("Confirm password is requyired"),
  })
  return (
    <Formik
      initialValues={{
        FirstName: "",
        LastName: "",
        Email: "",
        PassWord: "",
        ConfirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
          console.log('ok')
        setTimeout(() => {
          Object.values(values).forEach(item => setList(prev => [...prev, item]))
          console.log(values)
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {props => (
        <Form>
          <div>
            <h1 className="my-4 font-weight-bold-display-4"> SignUp </h1>
            {/* {console.log(formik.values)} */}
            {fields.map((item, index) => (
              <TextField key={index} label={item.name} name={item.name} type={item.type} />
            ))}
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
            {list.map(item => (
              <div>{item}</div>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SignUp
