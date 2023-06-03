import React from 'react';
import TextField from "@mui/material/TextField";
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';

export default function Form({setData, setTitle, title, desc, setDesc}) {

    const handleChange = (e) => {
        if(e.target.id==='title') {
            setTitle(e.target.value);
        } else {
            setDesc(e.target.value);
        }
    }

    const handleClick = () => {
        setData((item) => {
            return (
                [...item, {
                    title: title,
                    description: desc,
                }]
            )
        })
    }

  return (
    <div>
        <Card sx={{ maxWidth: 400, margin: 'auto' }}>
        <TextField 
            id='title'
            label='Title...'
            variant='outlined'
            value={title}
            onChange={(e) => handleChange(e)}
        />
        <TextField 
            id='description'
            label='Description...' 
            variant='outlined'
            value={desc}
            onChange={(e) => handleChange(e)}
        />
        <CardActions>
        <Button 
            type="submit"
            variant="outlined"
            onClick={() => handleClick()}
        >
            Add Note
        </Button>
        </CardActions>
        </Card>
    </div>
  )
}
