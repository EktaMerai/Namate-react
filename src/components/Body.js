import React from "react"
import resList from '../utills/mockData'
import ResturantCard from "./ResturantCard"

export const Body = () => {

    let listofRest = [
    {
        data: {
            id: "15678990",
            restaurantName: "KFC",
            cuisine: "burger",
            deliveryTime: 36,
            avgRating: "3.8"
        }
    },
    {
        data: {
            id: "15676790",
            restaurantName: "dominoz",
            cuisine: "pizza",
            deliveryTime: 36,
            avgRating: "4.8"
        }
    }
]

    return (
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn" onClick={() => { 
                    listofRest = listofRest.filter((res) => res.data.avgRating > 4); console.log(listofRest) }}>  Top Rated restaurant</button>
            </div>
            <div className="restro-conatiner">
                {listofRest.map((restaurant,index) => (<ResturantCard resData={restaurant} key={index}></ResturantCard>))}
            </div>
        </div>

    )
}
export default Body