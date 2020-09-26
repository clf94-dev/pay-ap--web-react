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
        <Grid container direction='row'>
            <Grid item lg={6} md={12}>
                <h2>Who we work with</h2>
                <p>Today, millions of people around the world have successfully connected their
                    accounts to apps they love using our API. We provide developers with the tools
                    they need to create easy and accessible experiences for their users.
                </p>
                <button>About Us</button>
            </Grid>
            <Grid item lg={6} md={12}>
                <Grid container direction='row'>
                    <Grid item sm={4} xs={6}>
                        <img src={TeslaD} alt="Tesla"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={MicrosoftD} alt="Microsoft"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={PackardD} alt="Hewlett Packard"/>
                     </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={OracleD} alt="Oracle"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={GoogleD} alt="Google"/>
                    </Grid>
                    <Grid item sm={4} xs={6}>
                        <img src={NvidiaD} alt="NVidia"/>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Companies
