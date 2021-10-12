

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AddList, List, Tasks } from './components';

function App() {

  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/lists?_expand=color').then(({ data }) => {
      setLists(data);
    });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

  const onAddList = obj => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List
          items={[
            {
              color: {
                name: 'green'
              },
              name: 'Все задачи',
              active: true
            }
          ]} />
          {console.log(lists)}
        <List
          items={lists}
          onRemove={(item) => ''}
          isRemovable />
        <AddList onAdd={onAddList} colors={colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
