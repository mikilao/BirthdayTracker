import React, {useState} from 'react';
import './App.css';
import data from "./data";
import List from './List';
import MockDate from 'mockdate';


function App() {
  const[person, setPerson] = useState(data) //set data as the state to manage the data
  const date = MockDate.set("1993-03-31")
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="header"><h3> {person.length} birthdays today</h3>
          <h4>{Date} </h4>
          </div>
          <List person = {person}/>
          <button onClick={() => setPerson([])}>Clear all</button>
          </section>
    
      </main>
    </div>
  );
}

export default App;
