import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav item
 * Body
 *  - Search
 *  - ResturentContainer
 *      - ResturantCard
 *          -IMG
 *          - Name of res,star,
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 * 
 */
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
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dotpe.in/logo/10090/ENT00316.png" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Conatct Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const resList = 
    [
        {
          "restaurantName": "The Cheese Cake Factory",
          "items": [
            {
              "itemId": "595184df77c826cc6f223f9d",
              "itemName": "CAESAR SALAD",
              "price": 7.99,
              "category": "salads",
              "active": true,
              "favorites": false
            },
            {
              "itemId": "595184df77c826cc6f223f9e",
              "itemName": "LUNCH CHICKEN SPECIALS",
              "price": 11.99,
              "category": "lunch specials",
              "active": true,
              "favorites": false
            }
          ]
        },
        {
          "restaurantName": "California Pizza Kitchen",
          "items": [
            {
              "itemId": "595184df77c826cc6f223f9f",
              "itemName": "ASPARAGUS + ARUGULA SALAD",
              "price": 7.99,
              "category": "small plates",
              "active": true,
              "favorites": false
            },
            {
              "itemId": "595184df77c826cc6f223fa0",
              "itemName": "LETTUCE WRAPS",
              "price": 11.99,
              "category": "appetizers",
              "active": true,
              "favorites": false
            },
            {
              "itemId": "595184df77c826cc6f223fa1",
              "itemName": "CRISPY FISH TACOS",
              "price": 13.99,
              "category": "main plates",
              "active": true,
              "favorites": false
            }
          ]
        }
      ]


const ResturantCard = (props) => {
    console.log(props)
    
    return(
        <div className="restro-card">
            <img about="res" src="https://meghanafoods.co.in/photo/Chicken%20curry%20with%20bone.jpg" />
            <h3>{props.resData.restaurantName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 start</h4>
            <h4>38 mintues</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body"> 
            <div className="search">
                Search
            </div>
            <div className="restro-conatiner">
                {/* <ResturantCard resList={resList}></ResturantCard> */}
                {resList.map((restaurant,index) => (<ResturantCard resData={restaurant} key={index}></ResturantCard>))}
            </div>
        </div>
    )
}
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