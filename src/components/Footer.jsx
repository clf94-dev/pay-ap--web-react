import {Grid} from '@material-ui/core'
import React from 'react'
import LogoW from './images/assets/shared/desktop/logo copy.svg'

import './styles/App.css'

function Footer() {
    return (
        <Grid container direction='row' className='footer-cont'>
            <Grid item md={2} xs={12}>
                <img src={LogoW} alt="PayApi"/>
            </Grid>
            <Grid item md={2} xs={12}>
                <p>Pricing</p>
            </Grid>
            <Grid item md={2} xs={12}>
                <p>About</p>
            </Grid>
            <Grid item md={2} xs={12}>
                <p>Contact</p>
            </Grid>
            <Grid item md={2} xs={12}></Grid>
            <Grid item md={2} xs={12}>
                <Grid container direction='row' className='social-row'>
                    <i className='fab fa-2x fa-facebook-square'></i>
                    <i className='fab fa-2x fa-twitter'></i>
                    <i className='fab fa-2x fa-instagram'></i>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Footer
