import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { AppState, Sub } from './interfaces/interfaces';

const INITIAL_STATE = [
  {
    nick: 'pblgllgs',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=pblgllgs',
    description: 'pblgllgs es un modeador',
  },
  {
    nick: 'toki_leftraru',
    subMonths: 1,
    avatar: 'https://i.pravatar.cc/150?u=toki_leftraru',
  },
];

const App = () => {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  // const [newsubs, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSubs = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs: {subs.length}</h1>
      <List subs={subs} />
      <Form onNewSubs={handleNewSubs} />
    </div>
  );
};

export default App;
