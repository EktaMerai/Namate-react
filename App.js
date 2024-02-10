import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id: "child"},[
    React.createElement("h1",{},"This is namaste react"),
    React.createElement("h2",{},"Heyyy")
]),
React.createElement("div",{id: "child2"},[
    React.createElement("h1",{},"I'm child h1 tag"),
    React.createElement("h2",{},"I'm child h2 tag")
])
]);

 const heading = React.createElement("h1",{id:"heading"},"Hello world from react");

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent);

//{} object we can pass attribute to h1 tag
