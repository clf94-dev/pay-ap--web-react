import {Grid} from '@material-ui/core'
import React from 'react'

function PricingCard(props) {
    return (
        <Grid item sm={4} xs={12} className='pricing-col'>
            <h3>{props.title}
            </h3>
            <p>{props.text}
            </p>
            <h1>{props.price}
            </h1>
            <hr/>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkTrans && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkTrans && 'rgb(108, 130, 148)'}}>Transactions</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkAuth && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkAuth && 'rgb(108, 130, 148)'}}>Auth</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkIdent && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkIdent && 'rgb(108, 130, 148)'}}>Identity</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkInvest && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkInvest && 'rgb(108, 130, 148)'}}>Investments</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkAssets && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkAssets && 'rgb(108, 130, 148)'}}>Assets</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkLiabil && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkLiabil && 'rgb(108, 130, 148)'}}>Liabilities</h4>
                </Grid>
            </Grid>
            <Grid container direction='row' className='feature-row'>
                <Grid item xs={3}>
                    <i className={props.checkInc && 'fas fa-check'}></i>
                </Grid>
                <Grid item xs={9}>
                    <h4 style={{color:!props.checkInc && 'rgb(108, 130, 148)'}}>Income</h4>
                </Grid>
            </Grid>
            <hr/>
            <button className='dark-btn'>Request Access</button>
        </Grid>
    )
}

export default PricingCard
