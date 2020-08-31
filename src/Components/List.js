import React from "react";

import firebase from "../firebase/base";

function App() {
  const [customers, setCustomers] = React.useState([]);
  //  const [newSpellName, setNewSpellName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.db;
      const data = await db.collection("customers").get();
      setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  //   const onCreate = () => {
  //     const db = firebase.firestore();
  //     db.collection("spells").add({ name: newSpellName });
  //   };

  return (
    <ul>
      {/* <input
        value={newSpellName}
        onChange={e => setNewSpellName(e.target.value)}
      /> */}
      {/* <button onClick={onCreate}>Creat</button> */}
      {customers.map((spell) => (
        <li key={spell.name}>
          {/* <SpellInput spell={spell} /> */}
          {spell.name + "     " + spell.age}
        </li>
      ))}
    </ul>
  );
}

export default App;
