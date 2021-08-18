import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MyGridSystem(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                   {props.first}
                </Grid>
                <Grid item xs={12} sm={3}>
                   {props.second}
                </Grid>
                <Grid item xs={12} sm={3}>
                  {props.third}
                </Grid>
                <Grid item xs={12} sm={3}>
                    {props.fourth}
                </Grid>
            </Grid>
        </div>
    );
}