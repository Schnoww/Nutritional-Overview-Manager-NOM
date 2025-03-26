// export default NewCalendar;
import React, { useState } from "react";
import dayjs from "dayjs";
import iniData from './data.jsx';
import "./NewCalendar.css"; // Custom styling

const NewCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="calendar-container">
            {/* Back Button & Header */}
            <div className="calendar-header">
                <button className="back-button">← Back</button>
                <h1>{dayjs(selectedDate).format("dddd, MMM D")}</h1>
            </div>

            {/* Date Selector */}
            <div className="date-selector">
                {Array.from({ length: 7 }).map((_, index) => {
                    const date = dayjs(selectedDate).add(index - 3, "day");
                    return (
                        <button
                            key={index}
                            className={date.isSame(selectedDate, "day") ? "selected" : ""}
                            onClick={() => setSelectedDate(date.toDate())}
                        >
                            {date.format("DD")} <br /> {date.format("ddd")}
                        </button>
                    );
                })}
            </div>

            {/* Schedule */}
            <h2>Schedule Today</h2>
            <div className="schedule">
                {iniData
                    .filter((food) => dayjs(food.date).isSame(selectedDate, "day")) // ✅ Compare correctly
                    .map((food) => (
                        <div key={food.name} className="meal-card">
                            <p className="meal-time">{food.time}</p>
                            <h3>{food.name}</h3>
                            <p>Total Calories: {food.calories}</p>
                            <p>Meal Eaten: {food.name}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewCalendar;
