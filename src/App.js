import React from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { useState } from 'react';
import CardData from './JSON/CardData.json';

function App() {

  const [data, setData] = useState(CardData);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div> 
      <Form setData={setData} title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} />
      <br />
      <Notes data={data}/>
    </div>
  );
}
export default App;
