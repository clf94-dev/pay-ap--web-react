import {Grid} from '@material-ui/core'
import React from 'react'

function Cta() {
    return (
        <Grid container direction='row'>
            <Grid item md={6} xs={12}>
                <h2>Ready to start?</h2>
            </Grid>
            <Grid item md={6} xs={12}>
                <Grid container direction='row'>
                    <Grid item sm={6} xs={12}>
                        <input type="text"/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <button>Schedule a Demo</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cta
