import logo from './logo.svg';
import './App.css';
import List from './components/List';

import { useSelector } from 'react-redux';
import EditBook from './components/EditBook';
import { useState } from 'react';
import AddBook from './components/AddBook';

function App() {
  let [flag, setFlag] = useState(false);
  let selectToEdit = useSelector(sta => sta.selectedBookToEdit);
  const changeFlag = () => {
    setFlag(true);
  }

  return (
    <>
      <input type="button" value="הוספת ספר חדש" onClick={changeFlag} />
      <List />
      {selectToEdit && <EditBook />}
      {flag && <AddBook f={setFlag}/>}



    </>
  );
}

export default App;
