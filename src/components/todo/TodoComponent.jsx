import React, {Component} from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class TodosComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Form',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    validate(values){
        let errors={}

        if(!values.description){
            errors.description = 'Enter a Ddcription.'
        }else if(values.description.length<5){
            errors.description = 'Enter atleast 5 characters in description.'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter valid targetdate.'
        }

        return errors
    }

    onSubmit(values){

    }


    render(){

        // let description = this.state.description
        // let targetDate = this.state.targetDate
        let {description,targetDate} = this.state

        return (
            <>
            <h1>Todo</h1>
            <div className="container">
                <Formik 
                    initialValues = {{description,targetDate}} 
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning" />
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"/>
                                
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"/>
                            </fieldset>
                            <button className="btn btn-success" type="submit">Save</button>
                        </Form>                            
                    )

                }
                </Formik>                
            </div>
        </>
        )
    }

}

export default TodosComponent