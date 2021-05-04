import React from 'react';
import './App.css';
import data from "./data";
import List from './List';


function App() {
  const[person, setPerson] = useState(data) //set data as the state to manage the data

  return (
    <div className="App">
      <main>
        <section className="container">
          <p> `{person.length}` birthdays today</p>
          <List person = {person}/>
          <button onCLick={() => console.log('clicked')}>Clear all</button>
          </section>
    
      </main>
    </div>
  );
}

export default App;
