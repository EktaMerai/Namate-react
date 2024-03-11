import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const parent = React.createElement("div",{id:"parent"},[
// React.createElement("div",{id: "child"},[
//     React.createElement("h1",{},"This is namaste react"),
//     React.createElement("h2",{},"Heyyy")
// ]),
// React.createElement("div",{id: "child2"},[
//     React.createElement("h1",{},"I'm child h1 tag"),
//     React.createElement("h2",{},"I'm child h2 tag")
// ])
// ]);

//  const heading = React.createElement("h1",{id:"heading"},"Hello world from react");

// const root1 = ReactDOM.createRoot(document.getElementById("root"));

// root1.render(parent);

//{} object we can pass attribute to h1 tag

//jsx : it's like HTML or XML
//React Element
// const jsxheading = (
{/* <h1 id="heading">Namste react using jsx</h1>
)

//React component
//class based
//Functional componet
const Title = () => (
    <h1>Title Test of componet insode componet</h1>
)

const total = '3000'
const HeadingComponet = () => (
    <div id="container">
    <Title />
    {total}
    <h1>My Functional base componet</h1>
    </div>
) */}
//React Functional componet

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}



const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout />);