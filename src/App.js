/*Global React ReactDOM*/
import React from "react";
// (instead) import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Pet from "./Pet";




const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
