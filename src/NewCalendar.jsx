// // export default NewCalendar;
// import React, { useState } from "react";
// import dayjs from "dayjs";
// import iniData from './data.jsx';
// // import "./NewCalendar.css"; // Custom styling

// const NewCalendar = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     return (
//         <div className="min-h-screen bg-gray-900 text-white p-6 space-y-8"> {/* .calendar-contatiner */}
//             {/* Back Button & Header */}
//             <div className="flex items-center space-x-2r"> {/*.calendar-header*/}
//                 <ChevronLeft className="w-5 h-5" />
//                 <button className="text-lg">← Back</button> {/*.back-button*/}
//                 <h1>{dayjs(selectedDate).format("dddd, MMM D")}</h1>
//             </div>

//             {/* Date Selector */}
//             <div className="flex justify-center"> {/*.date-selector*/}
//                 {Array.from({ length: 7 }).map((_, index) => {
//                     const date = dayjs(selectedDate).add(index - 3, "day");
//                     return (
//                         <button
//                             key={index}
//                             className={date.isSame(selectedDate, "day") ? "selected" : ""}
//                             onClick={() => setSelectedDate(date.toDate())}
//                         >
//                             {date.format("DD")} <br /> {date.format("ddd")}
//                         </button>
//                     );
//                 })}
//             </div>

//             {/* Schedule */}
//             <h2>Schedule Today</h2>
//             <div className="mt-2"> /*.schedule*/
//                 {iniData
//                     .filter((food) => dayjs(food.date).isSame(selectedDate, "day")) // ✅ Compare correctly
//                     .map((food) => (
//                         <div key={food.name} className="bg-indigo-600 text-white p-4 mb-2"> {/*.meal-card*/}
//                             <p className="text-sm">{food.time}</p> {/*.meal-time*/}
//                             <h3>{food.name}</h3>
//                             <p>Total Calories: {food.calories}</p>
//                             <p>Meal Eaten: {food.name}</p>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default NewCalendar;
