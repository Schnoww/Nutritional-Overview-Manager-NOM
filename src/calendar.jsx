// import React, { Component } from 'react';
// import CalendarDays from './calendar-days.jsx';

import React, { Component, useState } from 'react';
// import React from 'react';
// import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import CalendarDays from './calendar-days';
import './calendar.css'

export default class Calendar extends Component {
    constructor() {
        super();

        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        this.state = {
            currentDay: new Date()
        }
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }

    handleClick = (month, year) => {
        this.setState({ currentDay: new Date(year.year, month.month, 1) });
        // this.setState({ currentDay: new Date(year.day, month.day, day.number) });
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <h2>
                        <div className="monthPop">
                            <Popup trigger=
                                       {<p>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</p>}
                                   position="right top">
                                <div className="yearChoice">
                                    <div className="yearbutton">
                                        <Popup trigger =
                                               {<button type="button">2019</button>}
                                               position="right top">
                                                <div className="monthPop">
                                                <button type="button" onClick={() => this.handleClick(1, 2019)}>January</button>
                                                <button type="button">February</button>
                                                <button type="button">March</button>
                                                <button type="button">April</button>
                                                <button type="button">May</button>
                                                <button type="button">June</button>
                                                <button type="button">July</button>
                                                <button type="button">August</button>
                                                <button type="button">September</button>
                                                <button type="button">October</button>
                                                <button type="button">November</button>
                                                <button type="button">December</button>
                                                </div>
                                        </Popup>

                                        <button type="button">2020</button>
                                        <button type="button">2021</button>
                                        <button type="button">2022</button>
                                        <button type="button">2023</button>
                                        <button type="button">2024</button>
                                        <button type="button">2025</button>
                                        <button type="button">2026</button>
                                        <button type="button">2027</button>
                                        <button type="button">2028</button>
                                    </div>
                                </div>

                            </Popup>
                        </div>
                        {/*<p>{this.months[this.state.currentDay.getMonth()]} </p>*/}
                    </h2>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday) => {
                                return <div className="weekday" key={weekday}><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}/>
                </div>
            </div>
        )
    }
}