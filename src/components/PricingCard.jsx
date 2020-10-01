import {Grid} from '@material-ui/core'
import React from 'react'

function PricingCard(props) {
    return (
        <Grid item md={4} xs={12}>
            <h3>{props.title}
            </h3>
            <p>{props.text}
            </p>
            <h1>{props.price}
            </h1>
            <hr/>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkTrans && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Transactions</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkAuth && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Auth</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkIdent && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Identity</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkInvest && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Investments</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkAssets && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Assets</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkLiabil && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={10}>
                    <h4>Liabilities</h4>
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item xs={2}>
                    <i className={props.checkInc && 'fas fa-check'}></i>
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
