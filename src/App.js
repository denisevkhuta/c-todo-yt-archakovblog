

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { AddList, List, Tasks } from './components';

function App() {

  const [lists, setLists] = useState(
    DB.lists.map(
      item => {
        item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
        return item;
      }
    )
  );

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
              color: 'green',
              name: 'Все задачи',
              active: true
            }
          ]} />
        <List
          items={lists}
          onRemove={(item) => console.log(item)}
          isRemovable />
        <AddList onAdd={onAddList} colors={DB.colors} />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
