import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import {Button, Checkbox, FormControlLabel, Grid} from '@material-ui/core';

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function Form() {

    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);

    const [state,
        setState] = useState({update: false});

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    const {update} = state;
    const error = [update].filter((v) => v).length !== 1;

    return (
        <Grid container direction='column' className='form-cont'>
            <form data-aos='fade-left'
                    data-aos-delay='200' >
                <input
                    type="text"
                    name='name'
                    placeholder={errors.name
                    ? ' This is required'
                    : 'Name'}
                    style={errors.name
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true, maxLength: 30})}
                    className={errors.name
                    ? "error input"
                    : " input"}
                    
                  />
                <input
                    type="email"
                    name='email'
                    placeholder={errors.name
                    ? 'Enter a valid email address'
                    : 'Email'}
                    style={errors.email
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                    className={errors.email
                    ? "error input"
                    : " input"}
                  />
                <input
                    type="text"
                    name='Company'
                    placeholder='Company'
                    className=" input"
                  />
                <input
                    type="text"
                    name='Title'
                    placeholder='Title'
                    className=" input"
                  />
                <textarea
                    type="text"
                    name="message"
                    className={errors.message
                    ? "error message"
                    : " message"}
                    placeholder={errors.message
                    ? 'This is required'
                    : 'Your message....'}
                    style={errors.message
                    ? {
                        borderBottomColor: "red",
                        color: 'red'
                    }
                    : {
                        borderBottomColor: "black"
                    }}
                    ref={register({required: true})}
                   />
                <FormControlLabel
                    control={< Checkbox required checked = {
                    update
                }
                onChange = {
                    handleChange
                }
                name = "update" />}
                    label="Stay up-to-date with company announcements and updates to our API"/>
           
            </form>
            <Button type="submit" onClick={handleSubmit(onSubmit)} className='submit-btn' data-aos='fade-left'
                    data-aos-delay='400'>
                    Submit </Button>


        </Grid>
    )
}

export default Form
