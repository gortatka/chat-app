import React from 'react';
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
       avatar="https://randomuser.me/api/portraits/women/75.jpg"
      name="Vivan Kuhn"
     online={true}
     />
     <Contact
     avatar="https://randomuser.me/api/portraits/men/55.jpg"
     name="Michael George"
    online={false}
      />
      <Contact
     avatar="https://randomuser.me/api/portraits/women/58.jpg"
     name="Hazel Woods"
    online={true}/>
    </div>
  );
}

export default App;
