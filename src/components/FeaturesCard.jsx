import {Grid} from '@material-ui/core'
import React from 'react'

import PersonalD from './images/assets/home/desktop/icon-personal-finances.svg'
import BankingD from './images/assets/home/desktop/icon-banking-and-coverage.svg'
import CustomerD from './images/assets/home/desktop/icon-consumer-payments.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function FeaturesCard(props) {
    const FeaturesImgD = [PersonalD, BankingD, CustomerD];
    return (
        <Grid item sm={4} xs={12} className='feat-card' data-aos='fade-up' data-aos-delay={props.delay}>
            <img src={FeaturesImgD[props.index]} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </Grid>
    )
}

export default FeaturesCard
