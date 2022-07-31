import { Link } from "react-router-dom"
import { useFormik, validateYupSchema } from "formik"
import * as Yup from "yup"

const CustomerInfo = () => {

    const formik = useFormik({
        initialValues:{
            streetNumber: 0,
            streetName: "",
            suburb: "",
            postcode: "",
            state: ""
        },
        validationSchema: Yup.object({
            streetNumber: Yup.number().required("required"),
            streetName: Yup.string().min(3, "has to be more than 3 characters").required("required"),
            suburb: Yup.string().min(5, "has to be minimu 5 characters").required("required"),
            postcode: Yup.number().required("required"),
            state: Yup.string().required("required")

        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return(
        <>
            <Link to="/">Home</Link>
            <h1>Customer Info Page</h1>
            <form onSubmit={handleSubmit}>


            </form>
        </>
    )
}

export default CustomerInfo