import {Grid} from '@material-ui/core'
import React from 'react'
import './styles/App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();

function PrincipleCard(props) {
    return (
        <Grid container direction='row' className='principles-cont'>
            <Grid item sm={4} xs={12}>
                <h4 data-aos='fade-up' data-aos-delay={props.delayT}>{props.title}</h4>
            </Grid>
            <Grid item sm={8} xs={12}>
                <p data-aos='fade-up' data-aos-delay={props.delayt}>{props.text}</p>
            </Grid>
        </Grid>
    )
}

export default PrincipleCard
