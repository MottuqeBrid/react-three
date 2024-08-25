import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './data.json';
import List from './components/List';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import ReactBootarp from './components/reactBootstarp/ReactBootarp';
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './components/State/State';
import ConditionalRendering from './ConditionalRendering';
import EventBinding from './components/EventBInding/EventBinding';
import Form from './components/Form/Form';
import Child from './components/StateLifting/Child';

function App() {

  const users = [
    {
      fullName: "mottuqe Brid",
      age: 22,
      Phones: [
        { home: "01308133343" },
        { office: "4356346543" }
      ]
    },
    {
      fullName: "abir hosin",
      age: 24,
      Phones: [
        { home: "013081334532" },
        { office: "45674564" }
      ]
    }
  ]

  const handleChildData = (childData) => {
    console.log(childData);
  }

  return (
    <div className="">
      <div>
        <h1 className='heading_style'>Todo App</h1>
        <Child onChildData={handleChildData} />
        {/* <Form /> */}

        {/* <EventBinding /> */}

        {/* <ConditionalRendering /> */}

        {/* <State /> */}

        {/* <ReactBootarp /> */}

        {/* <Card1 name="card1" desc="this is card1" /> */}
        {/* <Card2 name="card2" desc="this is card2" /> */}
        {/* <h1>Nested Lists</h1>
        {
          users.map((user, index) => (
            <article key={index}>
              <h3>{user.fullName}</h3>
              <p>Age: {user.age}</p>
              {
                user.Phones.map((Phone, index) => (<div key={index}>
                  <p>{Phone.home}</p>
                  <p>{Phone.office}</p>
                </div>))
              }
            </article>))
        } */}
        {/* <List /> */}
        {/* {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} />)} */}
      </div>
    </div>
  );
}

export default App;
