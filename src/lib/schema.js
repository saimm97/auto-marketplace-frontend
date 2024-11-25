import * as yup from 'yup';
import { object, string, number, date } from 'yup';


let userSchema = object({
    name: string().required('Name is required'),
    // age: number().required().positive().integer(),
    email: string().required('Email is required').email(),
    // website: string().url().nullable(),
    // createdOn: date().default(() => new Date()),
    password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match')
  });

let userSignInSchema = object({
  email: string().required('Email is required').email(),
  password: yup.string()
  .required('Password is required')
  .min(6, 'Password must be at least 6 characters'),
});


export default [userSchema,userSignInSchema];
