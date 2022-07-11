import {
    Formik, Form,
    ErrorMessage,
    Field
 } from 'formik';
import * as Yup  from 'yup';
import { TextError } from './TextError';
export const NewFormik = ()=>{
    
  const initialValues = {
    name: 'Suraj',
    email:'',
    age: '',
    comment:'',
    address:''
  };
  const onSubmit = (values)=>{
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    email: Yup.string().required("Required Field").email("Email not Validate"),
    age: Yup.string().required("Age not filled"),
    address: Yup.string().required("Required Field Address"),
    comment: Yup.string().required("Required Field comment"),
  })
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div>
              <label htmlFor='name'>Name</label>
              <Field type="text" name="name" id="name" />
             <ErrorMessage name='name' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name='email'/>
            </div>
            <div>
              <label htmlFor='age'>Age</label>
              <Field type="number" name="age" id="age" />
              <ErrorMessage name='age' />
            </div>
            <div>
              <label htmlFor='comment'>Comment</label>
              <Field as="textarea" name="comment" id="comment" placeholder="Please enter comments"/>
              <ErrorMessage name='comment' component={TextError}/>
            </div>
            <Field name="address">
                {
                    (props)=>{
                        const {field, form, meta } = props;
                        console.log(props)
                        return (<>
                         <input {...field} /> 
                         {meta.touched && meta.error ? <span>{meta.error}</span>:null  }
                        </>)
                    }
                }

            </Field>
            <div>
              <button type='submit'>Submit</button>
            </div>
        </Form> 
        </Formik>
    )
}