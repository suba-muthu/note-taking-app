import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Notes({data}) {
  return (
    <div>
      {
        data.length === 0 ? 
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              "No notes are available"
            </Typography>
          </CardContent>
        </Card> :
        data.map((item) => {
          return (
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
            </Card>
          )
        })
      }
    </div>
  );
}
