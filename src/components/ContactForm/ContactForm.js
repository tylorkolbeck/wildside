import React, { Component } from 'react'
import './ContactForm.css'
import axios from 'axios'

import Input from '../UI/Input/Input'

class ContactForm extends Component {

    state = {
        submitted: false,
        subittedError: false,
        validForm: false,

        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 1
                },
                valid: false,
                touched: false
            },

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    email: 'check'
                },
                valid: false,
                touched: false
            },

            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },

            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 300
                },
                valid: false,
                touched: false
            },
        },

    formIsValid: false,
    loading: false,
    submitSuccess: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
          ...this.state.contactForm
        }
        const updatedFormEl = {
          ...updatedForm[inputIdentifier]
        }
    
        updatedFormEl.value = event.target.value
        updatedForm[inputIdentifier] = updatedFormEl
        updatedForm[inputIdentifier].valid = this.validate(updatedFormEl.value, updatedFormEl.validation)
        updatedFormEl.touched = true
    
        let formIsValid = true
        for (let inputIdentifier in updatedForm) {
          formIsValid = updatedForm[inputIdentifier].valid && formIsValid
        }
    
        this.setState({contactForm: updatedForm, formIsValid: formIsValid})
      }

      validate(value, rules) {
        // return true or false wether it is valid or not
        let isValid = true
        if (rules.required) {
          isValid = value.trim() !== '' && isValid
        }
    
        if (rules.minLength) {
          isValid = value.length >= rules.minLength && isValid
        }
    
        if (rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid
        }

        if(rules.email) {
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            isValid = value.match(emailRegex) ? true : false
        }
    
        return isValid
      }

      orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
    
        const formData = {}
        for (let elementId in this.state.contactForm) {
          formData[elementId] = this.state.contactForm[elementId].value
        }
    
        // console.log(formData)
    
        axios.post('http://mail.wildsidevo.com/send', formData)
        // axios.post('http://localhost:5000/send', formData) // LOCAL TESTING ONLY
    
        .then((response) => {
          console.log('MESSAGE SENT - ')
          console.log(response)
          if (response.data.success) {
            console.log('MESSAGE SUCCESS-', response)
            this.setState({submitted: true, submitSuccess: true})
          }
        })
    
        .catch((error) => {
          console.log('MESSAGE ERROR- ', error)
          this.setState({submitted: true, submitSuccess: false})
        })
    
      }
    

    render() {
        const formElementsArray = []
        let contactForm = null


        let submitSuccessMessage = null
        if (this.state.submitSuccess && this.state.submitted) {
            submitSuccessMessage = <h1>Your message has been submitted!</h1>
        } else if (this.state.submitted && this.state.submitSuccess === false) {
            submitSuccessMessage = <h1>There was an error sending your message. Please refresh and try again. </h1>
        }

        let errorMessage = <p> </p>
        if (!this.state.formIsValid) {
            errorMessage = <p className="invalidMessage">* All fields are required.</p>
        }

        for (let key in this.state.contactForm) {
            formElementsArray.push({
              id: key,
              config: this.state.contactForm[key]
            })
        }
        

        if (!this.state.submitted) {
            contactForm = (
                <div className="ContactForm_container">
                    {errorMessage}

                    <form onSubmit={this.orderHandler}>

                        {formElementsArray.map(el => (

                        <Input 
                            key={el.id} 
                            elementType={el.config.elementType} 
                            elementConfig={el.config.elementConfig} 
                            value={el.config.value} 
                            changed={(event) => this.inputChangedHandler(event, el.id)}
                            invalid={!el.config.valid}
                            shouldValidate={el.config.validation}
                            touched={el.config.touched}
                            />
                        ))}

                        <button 
                            disabled={!this.state.formIsValid}
                            style={{ marginTop: '20px'}}
                            className="Button ContactForm_button">
                            
                                SUBMIT
                        </button>

                        {/* <Button 
                            text="Submit" 
                            disabled={!this.state.formIsValid}
                            style={{background: '#606C67', color: 'white', marginTop: '20px'}}/> */}
                    </form>
                </div>
            )
        }

        return (
            <div className="ContactForm__primary">
                {submitSuccessMessage}
                {/* <h1>THIS IS A TEST. This is a test.</h1> */}
                {contactForm}
            </div>
        )
    }
}

export default ContactForm