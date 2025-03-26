// import React, {Component} from 'react';
//
// export default class Calendars extends Component {
//     constructor() {
//         super();
//
//         this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//         this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//
//         this.state = {
//             currentDate: new Date()
//         }
//     }
//
//     render() {
//         return (
//             <div className="calendar">
//                 <div className="calendar-header">
//                     <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}
//                     </h2>
//                 </div>
//
//                 <div className="calendar-body">
//                     <div className="table-header">
//                         {
//                             this.weekdays.map((weekday) => {
//                                 return <div className="weekday"><p>{weekday}</p></div>
//                             })
//                         }
//                     </div>
//
//                     <div className="table">
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }