import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card name={monster.name} email={monster.email} id={monster.id} />
      ))}
    </div>
  );
};
export default CardList;
