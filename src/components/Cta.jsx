import {Grid} from '@material-ui/core'
import React from 'react'

function Cta() {
    return (
        <Grid container direction='row' className='cta-cont' >
            <Grid item md={6} xs={12} className='text-col'>
                <h2>Ready to start?</h2>
            </Grid>
            <Grid item md={6} xs={12} className='input-col'>
                <Grid container direction='row'>
                    <Grid item sm={8} xs={12}>
                        <input placeholder='Enter email address ...'type="text"/>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <button className='pink-btn'>Schedule a Demo</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Cta
