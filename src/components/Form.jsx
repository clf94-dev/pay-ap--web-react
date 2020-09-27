import React, {useState} from 'react'
import {useForm} from 'react-hook-form';

import AOS from 'aos'
import 'aos/dist/aos.css';
import {Button, Checkbox, FormControlLabel, Grid} from '@material-ui/core';
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
            <form >
                <input
                    type="text"
                    name='name'
                    placeholder={errors.name
                    ? 'Name This is required'
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
                    data-aos='fade-left'
                    data-aos-delay='200'/>
                <input
                    type="email"
                    name='email'
                    placeholder={errors.name
                    ? 'Email Enter a valid email address'
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
                    data-aos='fade-left'
                    data-aos-delay='400'/>
                <input
                    type="text"
                    name='Company'
                    placeholder='Company'
                    className=" input"
                    data-aos='fade-left'
                    data-aos-delay='600'/>
                <input
                    type="text"
                    name='Title'
                    placeholder='Title'
                    className=" input"
                    data-aos='fade-left'
                    data-aos-delay='800'/>
                <textarea
                    type="text"
                    name="message"
                    className={errors.message
                    ? "error message"
                    : " message"}
                    placeholder={errors.message
                    ? 'Your message.... This is required'
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
                    data-aos='fade-left'
                    data-aos-delay='1000'/>
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
            <Button type="submit" onClick={handleSubmit(onSubmit)} className='submit-btn' data-aos='fade-up'  data-aos-delay='800'>
                    Submit </Button>


        </Grid>
    )
}

export default Form
