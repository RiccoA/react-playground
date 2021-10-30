// Todo
// add checkbox and select
// checkout formik helper for disabling button
import {
  Field,
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
      isSubmitting: {isSubmitting.toString()}
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
  ) => void | Promise<any>
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
    return onSubmit(values, setSubmitting)
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
    isDog: false,
    symptoms: [],
  }
  // on submit scenario
  // submit to server
  // if error, show error
  // set submitting to false
  // else data is good
  // show data? go to next page?

  // const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms))

  // anytime I want to submit something, my submit function must take a setSubmitting, and values parameter
  async function sendData(values: MyValues) {
    console.log(JSON.stringify(values, null, 2))
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
        <label>
          <Field type="checkbox" name="isDog" />
          Is Dog?
        </label>

        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="symptoms" value="One" />
            One
          </label>
          <label>
            <Field type="checkbox" name="symptoms" value="Two" />
            Two
          </label>
          <label>
            <Field type="checkbox" name="symptoms" value="Three" />
            Three
          </label>
        </div>
        <MyButton />
      </MyForm>
    </>
  )
}

export default FormikComponentsPlay
