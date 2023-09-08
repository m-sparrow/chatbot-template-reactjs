import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { red, blue } from '@mui/material/colors'


export default function Message(props) {
    const d = new Date();

    const [date] = useState(
        d.toLocaleString()
    );

    return(
        <React.Fragment>
            <Box sx={{ display: 'flex', width: '75vw', direction: 'row', justifyContent: props.msgType === 'user' ? 'flex-end' :  'flex-start'}}>
                <Card sx={{ m: 1, maxWidth: '60vw', backgroundColor: '#edf2f5' }}>
                    <CardHeader
                        avatar = {
                            <Avatar sx={{ bgcolor: props.msgType === 'user' ? blue[400] : red[400] }} aria-label={props.userName}>
                                {props.userName.substring(0,1)}
                            </Avatar>
                        }
                        title={props.userName}
                        subheader={date}
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            {props.msg}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </React.Fragment>

    );
}

