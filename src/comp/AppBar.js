import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

export default function AppBarIem(props) {
    return(
        <React.Fragment>
            <AppBar position='static' sx={{ bgcolor: '#ffffff' }} >
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 0.01, color: '#0096ff'}} >
                        AI ChatBot Template in ReactJS and MUI
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}