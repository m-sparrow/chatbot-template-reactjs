import React, { useState } from 'react'
import { FormControl, IconButton, OutlinedInput, InputAdornment, InputLabel } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export default function TextArea(props) {

    const [value, setValue] = useState('');
    const reply = (e) => {
        if(value !== '') {
            props.replyToApp(value);
            setValue('')
        }
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <FormControl variant='outlined' sx={{ m: 1, width: '75vw' }}>
                <InputLabel htmlFor="query-text">Ask Me</InputLabel>
                <OutlinedInput
                    id='query-text'
                    type='text'
                    value={value}
                    onChange={ (e) => setValue(e.target.value) }
                    onKeyDown={ (e) => {
                            if(e.key === 'Enter') {
                                reply(e)
                            }
                        }                            
                    }
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={(e) => reply(e)}>
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Ask Me"
                    disabled={props.disabled}
                />
            </FormControl>
        </React.Fragment>
    )
}