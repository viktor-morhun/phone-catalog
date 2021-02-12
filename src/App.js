import React, { useEffect } from 'react';
import { PhoneCard } from './PhoneCard';

import logo from './logo.svg';
import './App.css';

function App() {
  const [phones, setPhones] = React.useState([]);

  useEffect(() => {
    fetch('https://viktor-morhun.github.io/phone-catalog/api/phones.json')
      .then(response => response.json())
      .then(phones => {
        setPhones(phones);
      })
  }, []);

    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <section>
            <p>
              Search:
              <input type="text" />
            </p>
  
            <p>
              Sort by:
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>
  
          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
          </section>
        </div>
  
        <div className="col-md-10">
          <ul className="phones">
            {phones.map(phone => (
              <PhoneCard phone={phone} key={phone.id}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
}

export default App;
