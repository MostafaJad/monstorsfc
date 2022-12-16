import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    console.log("Effect run");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);
  const onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        onSearchChange={onSearchChange}
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
