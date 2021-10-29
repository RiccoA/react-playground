import { FieldHookConfig, Form, Formik, FormikHelpers, useField } from "formik"
import { ReactNode } from "react"

const MyTextInput = (props: FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{"test"}</label>
      <input
        className="text-input"
        {...field}
        placeholder={props.placeholder}
        type={props.type}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

interface MyValues {
  [field: string]: any
}

interface MyFormProps {
  initialValues: MyValues
  onSubmit: (
    values: MyValues,
    formikHelpers: FormikHelpers<MyValues>
  ) => void | Promise<any>
  children: ReactNode
}

function MyForm({ initialValues, onSubmit, children }: MyFormProps) {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>{children}</Form>
      </Formik>
    </>
  )
}

function FormikComponentsPlay() {
  const initValues = {
    firstName: "",
    lastName: "",
    email: "",
    acceptedTerms: false, // added for our checkbox
    jobType: "", // added for our select
  }

  const onSubmit = (
    values: MyValues,
    { setSubmitting }: FormikHelpers<MyValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <>
      <h1>Subscribe!</h1>
      <MyForm initialValues={initValues} onSubmit={onSubmit}>
        <MyTextInput name="firstName" type="text" placeholder="Jane" />

        <button type="submit">Submit</button>
      </MyForm>
    </>
  )
}

export default FormikComponentsPlay
