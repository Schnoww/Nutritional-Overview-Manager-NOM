import React, { useState } from "react";
import { FaTrash, FaFilter, FaSearch, FaChevronDown, FaChevronRight } from "react-icons/fa";
// import { FaTrash } from "lucid";
import "./Favorites.css"; // Import CSS file
import iniData from './data.jsx';

// Sample food data
// const foodData = [
//     { id: 1, name: "Garlic Bread", place: "Market Place", calories: 200, ingredients: "Garlic, Butter, Bread", cost: "$3.50" },
//     { id: 2, name: "Grilled Cheese", place: "Market Place", calories: 350, ingredients: "Bread, Cheese, Butter", cost: "$4.00" },
//     { id: 3, name: "Kung Pao Pork", place: "Market Place", calories: 600, ingredients: "Pork, Peanuts, Chili Sauce", cost: "$8.50" },
//     { id: 4, name: "Chicken Parm Ques.", place: "WoW Cafe", calories: 450, ingredients: "Chicken, Parmesan, Tortilla", cost: "$7.25" },
//     { id: 5, name: "HomeWrecker", place: "Moe’s Southwest Gr.", calories: 900, ingredients: "Steak, Rice, Beans, Cheese", cost: "$9.75" },
//     { id: 6, name: "Spicy Role", place: "Sushi-do", calories: 300, ingredients: "Rice, Seaweed, Spicy Tuna", cost: "$6.50" },
//     { id: 7, name: "Black Bean Burger", place: "Food On Demand", calories: 1000, ingredients: "Black Beans, Lettuce, Tomato", cost: "$16.75" },
// ];

const Favorites = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedItems, setExpandedItems] = useState({});

    // Toggle expanded state
    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the clicked item
        }));
    };

    // Filter food list based on search input
    const filteredFood = iniData.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="favorites-container">
            <h1 className="favorites-title">Favorites</h1>

            {/* Action Buttons & Search */}
            <div className="button-search-container">
                <button className="action-button">
                    <FaTrash className="icon" /> Delete
                </button>
                <button className="action-button">
                    <FaFilter className="icon" /> Filter
                </button>
                <div className="search-bar">
                    <FaSearch className="icon search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Food List */}
            <table className="food-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Food Item</th>
                </tr>
                </thead>
                <tbody>
                {filteredFood.map((food) => (
                    <React.Fragment key={food.name}>
                        <tr className="food-row" onClick={() => toggleExpand(food.name)}>
                            <td>{food.place}</td>
                            <td>
                                {food.name}
                                <span className="arrow">{expandedItems[food.id] ? <FaChevronDown /> : <FaChevronRight />}</span>
                            </td>
                        </tr>
                        {expandedItems[food.name] && (
                            <tr className="expanded-details">
                                <td colSpan="2">
                                    <div className="food-details">
                                        <p><strong>Calories:</strong> {food.calories}</p>
                                        <p><strong>Ingredients:</strong> {food.prob}</p>
                                        {/*<p><strong>Cost:</strong> {food.cost}</p>*/}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Favorites;



// import { useState } from "react";
// import { FaTrash, FaFilter, FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";
//
// const foodData = [
//     { id: 1, place: "Market Place", name: "Garlic Bread", calories: 250, ingredients: "Flour, Butter, Garlic", cost: "$5.00", allergies: "Dairy" },
//     { id: 2, place: "Market Place", name: "Grilled Cheese", calories: 500, ingredients: "Bread, Cheese, Butter", cost: "$7.50", allergies: "Dairy, Gluten" },
//     { id: 3, place: "Market Place", name: "Kung Pao Pork", calories: 650, ingredients: "Pork, Peanuts, Chili", cost: "$9.00", allergies: "Peanuts" },
//     { id: 4, place: "WoW Cafe", name: "Chicken Parm Ques.", calories: 700, ingredients: "Chicken, Cheese, Tomato", cost: "$10.50", allergies: "Dairy" },
//     { id: 5, place: "Moe’s Southwest Gr.", name: "HomeWrecker", calories: 850, ingredients: "Beef, Cheese, Guac", cost: "$12.00", allergies: "Dairy" },
//     { id: 6, place: "Sushi-do", name: "Spicy Role", calories: 300, ingredients: "Rice, Fish, Chili", cost: "$8.50", allergies: "Fish" },
//     { id: 7, place: "Food On Demand", name: "Black Bean Burger", calories: 1000, ingredients: "Meat, Lettuce, Onion, Tomato", cost: "$16.75", allergies: "None" }
// ];
//
// const FavoritesPage = () => {
//     const [expandedItem, setExpandedItem] = useState(null);
//
//     const toggleExpand = (id) => {
//         setExpandedItem(expandedItem === id ? null : id);
//     };
//
//     return (
//         <div className="bg-gray-900 text-white min-h-screen p-4">
//             {/* Header */}
//             <h1 className="text-lg font-semibold mb-4">Favorites</h1>
//
//             {/* Button Group */}
//             <div className="flex gap-2 bg-gray-800 p-3 rounded-lg">
//                 <button className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-md">
//                     <FaTrash /> Delete
//                 </button>
//                 <button className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-md">
//                     <FaFilter /> Filter
//                 </button>
//                 <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md flex-1">
//                     <FaSearch className="mr-2" /> Search
//                 </div>
//             </div>
//
//             {/* Table */}
//             <div className="bg-gray-800 p-3 mt-3 rounded-lg">
//                 <table className="w-full">
//                     <thead>
//                     <tr className="text-left text-gray-400 border-b border-gray-700">
//                         <th className="p-2">Name</th>
//                         <th className="p-2">Food Item</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {foodData.map((item) => (
//                         <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700 cursor-pointer" onClick={() => toggleExpand(item.id)}>
//                             <td className="p-2">{item.place}</td>
//                             <td className="p-2 flex justify-between">
//                                 {item.name}
//                                 {expandedItem === item.id ? <FaChevronDown /> : <FaChevronRight />}
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//
//             {/* Expanded Item Details */}
//             {expandedItem && (
//                 <div className="bg-gray-800 p-3 mt-3 rounded-lg">
//                     <h2 className="text-lg font-semibold">{foodData.find(item => item.id === expandedItem).name}</h2>
//                     <div className="grid grid-cols-2 gap-4 mt-2">
//                         <div>
//                             <p className="text-gray-400">Calories</p>
//                             <p>{foodData.find(item => item.id === expandedItem).calories}</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-400">Ingredients</p>
//                             <p>{foodData.find(item => item.id === expandedItem).ingredients}</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-400">Allergies</p>
//                             <p>{foodData.find(item => item.id === expandedItem).allergies}</p>
//                         </div>
//                         <div>
//                             <p className="text-gray-400">Cost</p>
//                             <p>{foodData.find(item => item.id === expandedItem).cost}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default FavoritesPage;
//
//
// // import { useEffect, useState } from 'react';
// // import * as React from "react";
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import './App.css';
// // import './NewCalendar.css'
// // import './Favorites.css'
// // import Dropdown from 'react-bootstrap/Dropdown';
// // import { FaTrash, FaFilter, FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";
// // // import { useEffect, useState } from "react";
// // import iniData from './data.jsx';
//
// // import getData from './data.jsx';
// //
//
//
// //     const makeHeart = () =>{
// //         <h4>heart</h4>
// //     }
// //     const deleteFav = () => {}
// //     const filterFav = () => {}
// //     const searchFav = () => {}
// //     const goToItem = () => {}
// //
// //     return (
// //         <div className='container'>
// //             <h1>Favorites</h1>
// //             <div className='MainBar'>
// //                 <div className='button'>
// //                 <button onClick={deleteFav}> Delete
// //                 </button>
// //                 </div>
// //
// //                 <div className='button'>
// //                 <button onClick={filterFav}> Filter
// //                 </button>
// //                 </div>
// //
// //                 <div className='Search'>
// //                 <button onClick={searchFav}> Search
// //                 </button>
// //                 </div>
// //             </div>
// //
// //             <div className='ListItems'>
// //                 <div className='Title'>
// //                     <h3>Name</h3>
// //                     <h3>Food Item</h3>
// //                     <button onClick={""}> {">"} </button>
// //                 </div>
// //                 <div className='foodItems'>
// //                     {iniData.map((food) => (
// //                         food.favorite === true ? (
// //                             // food.location === 'Marketplace' ? (
// //                             <h3 key={food.name}> {food.location} {food.name} calories
// //                                 {<Dropdown>
// //                                     <Dropdown.Toggle variant="Success" id="dropdown-basic">
// //                                         {">"}
// //                                         <Dropdown.Menu>
// //
// //                                         </Dropdown.Menu>
// //                                     </Dropdown.Toggle>
// //
// //                                 </Dropdown>}
// //                             </h3>
// //                             // ) : null
// //                         ) : null
// //                     ))}
// //                 </div>
// //             </div>
// //                 {/*<h3>Delete</h3> <h3>Filter</h3>*/}
// //
// //             <div className='MarketplaceContainer'>
// //                 <h2>Marketplace</h2>
// //                 {iniData.map((food) => (
// //                     food.favorite === true ? (
// //                         food.location === 'Marketplace' ? (
// //                             <h3 key={food.name}> {food.name} {food.calories} calories {makeHeart()}</h3>
// //                         ) : null
// //                     ) : null
// //                 ))}
// //             </div>
// //
// //             <div className='FODContainer'>
// //             <h2>FOD</h2>
// //             {iniData.map((food) => (
// //                 food.favorite === true ? (
// //                     food.location === 'FOD' ? (
// //                         <h3 key={food.name}> {food.name} {food.calories} calories</h3>
// //                     ) : null
// //                 ) : null
// //             ))}
// //             </div>
// //
// //             <div className='OtherContainer'>
// //             <h2>Other</h2>
// //             {iniData.map((food) => (
// //                 food.favorite === true ? (
// //                     food.location === 'WOW' ? (
// //                         <h3 key={food.name}> {food.name} {food.calories} calories</h3>
// //                     ) : null
// //                 ) : null
// //             ))}
// //             </div>
// //         </div>
// //     );
// // }
// // // export default Favorites;
// //
// // // const Favorites = () => {
// // //     const [favorites, setFavorites] = useState([iniData]);
// // //     const [showForm, setShowForm] = useState(false);
// // //
// // //     const addFavorites = (food) => {
// // //         setFavorites((prevFavorites) =>
// // //             prevFavorites.map((item) =>
// // //                 item.name === food.name ? { ...item, favorite: true } : item
// // //             )
// // //         );
// // //         setShowForm(false);
// // //     };
// // //
// // //     const removeFavorites = (food) => {
// // //         setFavorites((prevFavorites) =>
// // //             prevFavorites.map((item) =>
// // //                 item.name === food.name ? { ...item, favorite: false } : item
// // //             )
// // //         );
// // //         setShowForm(false);
// // //     };
// // //
// // //     // const addfavorites = (food) => {
// // //     //     setfavorites(prevfavorites => [
// // //     //         ...prevfavorites,
// // //     //         {
// // //     //             food.favorite = true,
// // //     //             // bmTitle: favorite.bmTitle,
// // //     //             // bmLink: favorite.bmLink,
// // //     //         }
// // //     //     ]);
// // //     //     setShowForm(false);
// // //     // }
// // //
// // //     // console.log(favorites);
// // //     // const deletefavorite = (id) => {
// // //     //     setfavorites(prevfavorites =>
// // //     //         prevfavorites.filter(bm => bm.id !== id));
// // //     //     console.log(id);
// // //     // }
// // //
// // //     // const openForm = () => {
// // //     //     setShowForm(true);
// // //     // }
// // //     //
// // //     // const closeForm = () => {
// // //     //     setShowForm(false);
// // //     // }
// // //
// // //     useEffect(() => {
// // //         const json = localStorage.getItem("favorites");
// // //         const loadedfavorites = JSON.parse(json);
// // //         if (loadedfavorites) {
// // //             setFavorites(loadedfavorites)
// // //         }
// // //     }, []);
// // //
// // //     useEffect(() => {
// // //         const json = JSON.stringify(favorites);
// // //         localStorage.setItem("favorites", json);
// // //     }, [favorites])
// // //
// // //     return (
// // //         <div className="favorites">
// // //             {
// // //                 // <h1>Favorites</h1>
// // //                 showForm ?
// // //                     <div className="favorites-container">
// // //                         <h1>Favorites</h1>
// // //                         <div className="backdrop">
// // //                     {/*        <FavoriteForm*/}
// // //                     {/*            addFavorites={addFavorites}*/}
// // //                     {/*            closeForm={closeForm}*/}
// // //                     {/*        />*/}
// // //                         </div>
// // //                         <h2>FavList</h2>
// // //                         {/*<FavoriteList*/}
// // //                     {/*        favorites={favorites}*/}
// // //                     {/*        removeFavorites={removeFavorites}*/}
// // //                     {/*        openForm={openForm}*/}
// // //                     {/*    />*/}
// // //                     </div>
// // //                     : null
// // //                     // <FavoriteList
// // //                     //     Favorites={Favorites}
// // //                     //     deletefavorite={deletefavorite}
// // //                     //     openForm={openForm}
// // //                     // />
// // //             }
// // //
// // //         </div>
// // //     );
// // // }
// //
// // export default Favorites;