import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { AppState, Sub } from './interfaces/interfaces';
import { fetchSubs, mapFromApiToSubs } from '../src/api/fetch';

const App = () => {
  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubs, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchSubs().then(mapFromApiToSubs).then(setSubs);
  }, []);

  const handleNewSubs = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((newSubsNumber) => newSubsNumber + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Subs: {subs.length}</h1>
      <List subs={subs} />
      New subs: {newSubs}
      <Form onNewSubs={handleNewSubs} />
    </div>
  );
};

export default App;
