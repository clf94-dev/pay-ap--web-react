import { Grid } from '@material-ui/core'
import React from 'react'

function PricingCard(props) {
    return(
        <Grid container >
            <h3></h3>
            <p></p>
            <h1></h1>
            <hr/>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                    <h4>Transactions</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Auth</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Identity</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Investments</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Assets</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Liabilities</h4>
                    </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={10}>
                <h4>Income</h4>
                    </Grid>
            </Grid>
            <hr/>
            <button className='dark-btn'>Request Access</button>
        </Grid>
    )
}

export default PricingCard
