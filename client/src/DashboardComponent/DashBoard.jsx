import React, { useContext } from 'react'
import Home from '../HomeComponent/Home'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccessAlarmsRoundedIcon from '@material-ui/icons/AccessAlarmsRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';

import "./dashboard.scss"

function DashBoard() {

    return (
        <div className="dashboard">
            <Home />
            <h4>Questions DashBoard</h4>
            <Grid container spacing={5}>
                <Grid item xs={5} sm={3}>
                    <Paper ><AccessAlarmsRoundedIcon style={{ color: "orange", fontSize: "3em" }} />InProgress  <b>2/10</b></Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper > <CheckRoundedIcon style={{ color: "green", fontSize: "3em" }} />Approved</Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper > <ClearRoundedIcon style={{ color: "red", fontSize: "3em" }} />Rejected</Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper ><BarChartRoundedIcon style={{ fontSize: "3em" }} />Total Questions</Paper>
                </Grid>
                <Grid item xs={12} className="chart" >
                    <Paper >Total Records Chart</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoard
