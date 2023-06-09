import React from 'react';
import TextField from "@mui/material/TextField";
import { Button, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export default function Form({setData, setTitle, title, desc, setDesc, data, editNote, setEditNote}) {

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
                    id: new Date().getTime()
                }]
            )
        })
        setTitle("");
        setDesc("");
    }

    const handleUpdate = () => {
        setData(
            data.map((item) => {
                if(item.id === editNote) {
                    return ({
                        ...item, 
                            title: title,
                            description: desc
                        })
                    }
                return item;
            })
        )
        setTitle("");
        setDesc("");

        setEditNote(null);
    }

  return (
    <div>
        <Typography variant='h3' sx={{ textAlign: 'center' }}>Note Taking App</Typography>
        <Card sx={{ maxWidth: '40rem', margin: 'auto', mt: 3, padding: 5}}>
        <TextField 
            id='title'
            label='Enter Your Title...'
            variant='outlined'
            value={title}
            onChange={(e) => handleChange(e)}
            sx={{ width: 500, maxWidth: '100%', ml: 10}}
            margin= "normal"
            // inputProps={{ maxlength: 10 }}
        />
        <TextField  
            id='description'
            label='Enter Your Description...' 
            variant='outlined'
            value={desc}
            onChange={(e) => handleChange(e)}
            sx={{ width: 500, maxWidth: '100%', ml: 10 }}
            margin= "normal"
        />
        <CardActions>
                <Button 
                    type="submit"
                    variant="contained"
                    onClick={() => handleClick()}
                    sx={{ ml: 10 }}
                >
                    Add Note
                </Button>
                <Button 
                    type="submit"
                    variant="contained"
                    onClick={() => handleUpdate()}
                    sx={{ ml: 10 }}
                >
                update Note
            </Button>
        </CardActions>
        </Card>
    </div>
  )
}
