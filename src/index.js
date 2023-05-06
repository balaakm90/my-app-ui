import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Routing } from './Components/Routing';
import './index.css';
import { BrowserRouter, Link } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const loadList = (props) => {
  let listItems = [
    {
      name: 'Home',
      path: 'Home'
    }, {
      name: 'Map',
      path: 'Map'
    }, {
      name: 'Contact',
      path: 'Contact'
    }
  ];
  return (
    <ul className='header-list'>
      {
        listItems.map(x => {
          return (
            <li className='header-list-item'><Link className='header-list-item-anchor' to={'/' + x.path}>{x.name}</Link></li>
          )
        })
      }
    </ul>
  );
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='page'>
        <div className='page-header'>
          {loadList()}
        </div>
        <div className='page-body'>
          <Routing />
        </div>
        <div className='page-footer'>
          <span className='footer-text'>{'© ' + new Date().getFullYear() + ' - Balasubramaniyan Nagabushanam'}</span>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
