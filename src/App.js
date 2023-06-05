import React from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { useState } from 'react';
import CardData from './JSON/CardData.json';

function App() {

  const [data, setData] = useState(CardData);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editNote, setEditNote] = useState(null);

  return (
    <div> 
      <Form setData={setData} title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} data={data} editNote={editNote} setEditNote={setEditNote}/>
      <Notes data={data} setData={setData} setTitle={setTitle} setDesc={setDesc} setEditNote={setEditNote} />
    </div>
  );
}
export default App;
