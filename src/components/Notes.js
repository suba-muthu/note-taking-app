import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Notes({data, setData, setEditNote, setTitle, setDesc}) {

  const handleDelete = (id) => {
    const removeNote = data.filter((element) => {
      if(element.id !== id) {
        return element;
      }
    })
    setData(removeNote);
  }

  const handleEdit = (id) => {
    let newItem = data.find((element) => {
      return element.id === id
    });
    
    setTitle(newItem.title);
    setDesc(newItem.description);
    
    setEditNote(id);
  }

  return (
    <div>
      <Typography variant='h4' sx={{ ml: 45, mb: 2 }}>Notes</Typography>
      {
        data.length === 0 ? 
        <Card sx={{ maxWidth: 400, margin: 'auto' }}>
          <CardContent>
            <Typography variant="h5" component="div" textAlign={'center'}>
              "No notes are available"
            </Typography>
          </CardContent>
        </Card> :
        data.map((item) => {
          return (
            <Card sx={{ maxWidth: 500, m: 'auto', mb: 5, height: '200%' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                variant="contained" 
                color="success" 
                onClick={() => handleEdit(item.id)}
              >
                Edit
              </Button>
              <Button size="small" variant="contained" color="error" onClick={() => handleDelete(item.id)}>Delete</Button>
            </CardActions>
            </Card>
          )
        })
      }
    </div>
  );
}
