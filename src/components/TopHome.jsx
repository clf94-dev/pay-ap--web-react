import {Grid} from '@material-ui/core'
import React from 'react'

import PhoneD from './images/assets/home/desktop/illustration-phone-mockup.svg'

function TopHome() {
    return (
        <Grid container direction='row'>
            <Grid item lg={6} md={12}>
                <h1>Start building with our APIs for absolutely free.</h1>

                <Grid container direction='row'>
                    <Grid item md={6} xs={12}>
                        <input type="text"/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <button>Schedule A Demo</button>
                    </Grid>

                </Grid>

            </Grid>
            <Grid item lg={6} md={12}>
                <img src={PhoneD} alt="phone notification"/>
            </Grid>
        </Grid>
    );
}

export default TopHome;
