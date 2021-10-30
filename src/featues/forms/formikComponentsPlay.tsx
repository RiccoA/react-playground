// Todo
// add checkbox and select
// checkout formik helper for disabling button
import {
  FieldHookConfig,
  Form,
  Formik,
  FormikHelpers,
  useField,
  useFormikContext,
} from "formik"

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

const MyButton = () => {
  const { isSubmitting } = useFormikContext()
  return (
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  )
}

interface MyValues {
  [field: string]: any
}

interface MyFormProps {
  initialValues: MyValues
  onSubmit: (
    values: MyValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void
  children: ReactNode
}

function MyForm({ initialValues, onSubmit, children }: MyFormProps) {
  const validate = (values: MyValues) => {
    const errors: any = {}
    if (!values.firstName) {
      errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less"
    }
    return errors
  }

  const submitWrapper = (
    values: MyValues,
    { setSubmitting }: FormikHelpers<MyValues>
  ) => {
    onSubmit(values, setSubmitting)
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={submitWrapper}
        validate={validate}
      >
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
    dogs: ["poo", ""],
    jobType: "", // added for our select
  }
  // on submit scenario
  // submit to server
  // if error, show error
  // set submitting to false
  // else data is good
  // show data? go to next page?

  // anytime I want to submit something, my submit function must take a setSubmitting, and values parameter
  function sendData(
    values: MyValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) {
    setTimeout(() => {
      console.log("values", values)
      setSubmitting(false)
    }, 500)
  }

  // const onSubmit = (
  //   values: MyValues,
  //   { setSubmitting }: FormikHelpers<MyValues>
  // ) => {
  //   setTimeout(() => {
  //     console.log("being caled")
  //     alert(JSON.stringify(values, null, 2))
  //     setSubmitting(false)
  //   }, 400)
  // }

  return (
    <>
      <h1>Subscribe!</h1>
      <MyForm initialValues={initValues} onSubmit={sendData}>
        <MyTextInput name="firstName" type="text" placeholder="Jane" />
        <MyTextInput name="dogs[0]" type="text" placeholder="" />
        <MyTextInput name="dogs[1]" type="text" placeholder="" />
        <MyButton />
      </MyForm>
    </>
  )
}

export default FormikComponentsPlay
