import React from "react"
import {
    Formik,
    Form,
    Field
} from "formik"


class FormTest extends React.Component {

    state = {
        foo: {
            num: -1
        }
    };

    render()
    {
        return (
            <div>
                <Formik
                    initialValues={this.state.foo}
                    onSubmit={(values, actions) => {

                        console.log("Submitted: ", JSON.stringify(values));
                        actions.setSubmitting(false);
                    }}

                    render={({errors, touched, isSubmitting, isValid}) => (
                        <Form>
                            <Field type="text" name="num" validate={v => isNaN(+v) ? "Invalid Number" : null}/>
                            {errors.num && touched.num && <div>{errors.num}</div>}
                            <button type="submit" disabled={ isSubmitting }>
                                Submit
                            </button>
                        </Form>
                    )}
                /></div>
        )
    }
}

export default FormTest
