import About from './About';
import Shop from './Shop';
import Home from './Home';
import React, { useEffect, useState } from "react";
import Contact from './Contact';
import Shopsingle from './Shopsingle';
import CardBody from './CardBody';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [addedItems, setAddedItem] = useState([]);
  const [state, setState] = useState([]);
  
  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        setState(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/shopsingle' element={<Shopsingle />} />
          <Route path='/cardbody' element={<CardBody />} />
          {/* products={itmesFilter} */}
          addItem={addItem}
          {/* removeItem={removeItem} */}
          addedItems={addedItems}
        </Routes>
      </BrowserRouter>
      {/* <div>
        {state.map((ele) => (
          <React.Fragment key={ele.id}>
            <li>{ele.id}</li>
            <li>{ele.title}</li>
            <li>{ele.name}</li>
            <img src={ele.image} alt={ele.title} style={{width:"50px",height:"50px"}}/>
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
}

export default App;
