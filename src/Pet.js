const Pet = (props) => {
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <h2>{props.name}</h2>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
        </div>
    );
};

// import React from "react";
// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h2", {}, props.name),
//         React.createElement("h3", {}, props.animal),
//         React.createElement("h3", {}, props.breed),
//     ]);
// };

export default Pet;