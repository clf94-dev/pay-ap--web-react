import {Grid} from '@material-ui/core'
import React from 'react'

import PhoneD from './images/assets/home/desktop/illustration-phone-mockup.svg'

import './styles/App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function TopHome() {
    return (
        <Grid container direction='row' className='top-home-cont'>
            <Grid item lg={6} md={12} className='text-col'>
                <h1 data-aos='fade-right' data-aos-delay='100'>Start building with our APIs for absolutely free.</h1>

                <Grid container direction='row' className='input-row' data-aos='fade-right' data-aos-delay='300'>
                    <Grid item md={6} xs={12}>
                        <input placeholder='Enter email address...'type="text"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <button className='pink-btn'>Schedule A Demo</button>
                    </Grid>

                </Grid>

            </Grid>
            <Grid item lg={6} md={12} className='img-col'>
                <img data-aos='fade-left' data-aos-delay='100' src={PhoneD} alt="phone notification"/>
            </Grid>
        </Grid>
    );
}

export default TopHome;
