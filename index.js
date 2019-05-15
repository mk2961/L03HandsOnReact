import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const items = [
    { name: 'Honda CR_V'},
    { name: 'Toyota Highlander'},
    { name: 'Ford F-150'},
    { name: 'BMW X3'},
    {name: 'Subaru Crosstrek'}

  ];

  return <List items={items} />;
};

const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index}>
      {item.name}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

ReactDOM.render(<App />, document.getElementById('root'));