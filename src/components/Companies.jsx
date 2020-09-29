import {Grid} from '@material-ui/core'
import React from 'react'

import TeslaD from './images/assets/shared/desktop/tesla.svg'
import MicrosoftD from './images/assets/shared/desktop/microsoft.svg'
import PackardD from './images/assets/shared/desktop/hewlett-packard.svg'
import OracleD from './images/assets/shared/desktop/oracle.svg'
import GoogleD from './images/assets/shared/desktop/google.svg'
import NvidiaD from './images/assets/shared/desktop/nvidia.svg'

function Companies() {

    const companiesD = [
        TeslaD,
        MicrosoftD,
        PackardD,
        OracleD,
        GoogleD,
        NvidiaD
    ];
    return (
        <Grid container direction='row' className='companies-cont'>
            <Grid item lg={6} md={12} className='text-col'>
                <h2>Who we work with</h2>
                <p>Today, millions of people around the world have successfully connected their
                    accounts to apps they love using our API. We provide developers with the tools
                    they need to create easy and accessible experiences for their users.
                </p>
                <button className='dark-btn'>About Us</button>
            </Grid>
            <Grid item lg={6} md={12} className='comp-col'>
                <Grid container direction='row' className='comp-row'>
                    <Grid item sm={4} xs={6}>
                        <img src={TeslaD} className='company-logo' alt="Tesla"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={MicrosoftD} className='company-logo' alt="Microsoft"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={PackardD} className='company-logo' alt="Hewlett Packard"/>
                     </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={OracleD} className='company-logo' alt="Oracle"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={GoogleD} className='company-logo' alt="Google"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={NvidiaD} className='company-logo' alt="NVidia"/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Companies
