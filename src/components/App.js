import { useState } from 'react';
import Logo from './logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: false },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
//   { id: 3, description: 'Charger', quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to clear the list?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handelAddItems} />

      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItems={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <sapn style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </sapn>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
