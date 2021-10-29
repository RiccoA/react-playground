import { useFormik } from "formik"
import { useEffect, useState } from "react"

interface IModel {
  email: string
  firstName: string
  lastName: string
}

function FormikPlay() {
  const initModel: IModel = {
    email: "",
    firstName: "",
    lastName: "",
  }
  const [model, setModel] = useState<IModel>(initModel)

  useEffect(() => {
    console.log(JSON.stringify(model, null, 2))
  }, [model])

  const validate = (values: any) => {
    const errors: any = {}

    if (!values.firstName) {
      errors.firstName = "Required"
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less"
    }

    if (!values.lastName) {
      errors.lastName = "Required"
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less"
    }

    if (!values.email) {
      errors.email = "Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address"
    }

    return errors
  }

  const onSubmit = (values: IModel) => {
    setModel(values)
    // submit the values from here
    // lock the form
    //
  }

  const formik = useFormik({
    initialValues: model,
    validate: validate,
    onSubmit: onSubmit,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormikPlay
