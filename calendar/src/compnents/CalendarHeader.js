import React,{Component} from 'react';

export default class CalendarHeader extends Component {
    render() {
        return (
            <div className="calendarHeader">
                <span className="prev" onClick={this.props.prevMonth}>
                    《
                </span>
               
                <span className="dateInfo">
                    {this.props.year} &nbsp;  年  &nbsp;  {this.props.month + 1}  &nbsp; 月
                </span>
                <span className="next" onClick={this.props.nextMonth}>
                    》
                </span>
            </div>
        )
    }
}
