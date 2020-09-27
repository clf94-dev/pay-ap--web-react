import {Grid} from '@material-ui/core'
import React from 'react'
import Form from '../Form'
import TopContact from '../TopContact'

import TeslaD from '../images/assets/shared/desktop/tesla.svg'
import MicrosoftD from '../images/assets/shared/desktop/microsoft.svg'
import PackardD from '../images/assets/shared/desktop/hewlett-packard.svg'
import OracleD from '../images/assets/shared/desktop/oracle.svg'
import GoogleD from '../images/assets/shared/desktop/google.svg'
import NvidiaD from '../images/assets/shared/desktop/nvidia.svg'

function Contact() {

   
    return (
        <div>
            <TopContact/>
            <Grid container direction='row'>
                <Grid item lg={6} md={12}>
                    <Form/>
                </Grid>
                <Grid item lg={6} md={12}>
                    <h3>Join the thousands of innovators already building with us</h3>
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
        </div>
    )
}

export default Contact
