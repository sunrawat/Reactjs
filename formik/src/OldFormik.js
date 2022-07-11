import { useFormik } from 'formik';
import * as Yup  from 'yup';
export const OldFormik = ()=>{
    
  const initialValues = {
    name: 'Suraj',
    email:'',
    age: ''
  };
  const onSubmit = (values)=>{
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    email: Yup.string().required("Required Field").email("Email not Validate"),
    age: Yup.string().required("Age not filled")
  })
  const validate = (values)=>{
    // value will be values.name,values.age, values.email
    // there has to be a error object returned 
    // error.name , error.age, error.email

    let errors = {};
    if(!values.name) {
      errors.name = 'Required Field'
    }
    if(!values.email) {
      errors.email = 'Required Field'
    }else if(! /^[a-z]*$/.test(values.email)) {
      errors.email = 'validation error'
    }
    if(!values.age) {
      errors.age = 'Required Field'
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //validate
  });

  console.log(formik.errors);
    return (
        <>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='name'>Name</label>
              <input type="text" name="name" id="name" 
                // onChange={formik.handleChange} 
                // value={formik.values.name} 
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps('name')}
                />
              <div className='error'>
                { formik.touched.name && formik.errors.name ? formik.errors.name : null}
              </div>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type="email" name="email" id="email" 
              // onChange={formik.handleChange}
              // value={formik.values.email}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps('email')}

              />
              <div className='error'>
                { formik.touched.email && formik.errors.email ? formik.errors.email : null}
              </div>
            </div>
            <div>
              <label htmlFor='age'>Age</label>
              <input type="number" name="age" id="age" 
              // onChange={formik.handleChange} value={formik.values.age}
              // onBlur={formik.handleBlur}
              {...formik.getFieldProps('age')}
              
              />
              <div className='error'>
                { formik.touched.age && formik.errors.age ? formik.errors.age : null}
              </div>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
        </form> 
        </>
    )
}