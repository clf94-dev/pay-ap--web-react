import {Grid} from '@material-ui/core'
import React from 'react'

import TerminalD from './images/assets/home/desktop/illustration-easy-to-implement.svg'
import SimpleUID from './images/assets/home/desktop/illustration-simple-ui.svg'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function MiddleHomeCard(props) {
    const MiddleImgD = [TerminalD, SimpleUID];

    return (
        <Grid container direction='row'  className={props.classes}>
            <Grid item lg={6} md={12} className='text-col'>
                <h2 data-aos='fade-up' data-aos-delay='200'>{props.title}</h2>
                <p data-aos='fade-up' data-aos-delay='400'>{props.text}</p>
            </Grid>
            <Grid item lg={6} md={12} className='img-col'>
                <img data-aos='fade-up' data-aos-delay='200' src={MiddleImgD[props.index]} alt={props.alt}/>
            </Grid>
        </Grid>

    )
}

export default MiddleHomeCard
