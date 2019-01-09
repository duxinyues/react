import React, { Component } from 'react';
import CalendarHeader from './Calendar/CalendarHeader';
import CalendarMain from './Calendar/CalendarMain';
const displayDaysPerMonth = (year) => {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29
    }
    let daysInpreviousMonth = [].concat(daysInMonth);
    daysInpreviousMonth.unshift(daysInpreviousMonth.pop())

    //获取每个月数据中需要补足上个月天数
    let addDaysFromPreMonth = new Array(12).fill(null).map((item, index) => {
        let day = new Date(year, index, 1).getDay();
        if (day === 0) {
            return 6
        } else {
            return day - 1
        }
    })

    //返回一年中的每月显示数据,每月显示数据是6行*7天
    return new Array(12).fill([]).map((month, monthIndex) => {
        let addDays = addDaysFromPreMonth[monthIndex];
        let daysCount = daysInMonth[monthIndex];
        let daysCountPrevious = daysInpreviousMonth[monthIndex];
        let monthData = [];
        //补足上月天数
        for (; addDays > 0; addDays--) {
            monthData.unshift(daysCountPrevious--)
        }
        //填入本月
        for (let i = 0; i < daysCount;) {
            monthData.push(++i)
        }

        //补足下个月
        for (let i = 42 - monthData.length, j = 0; j < i;) {
            monthData.push(++j)
        }
        return monthData
    })

}

export default class WeChat extends Component {
    constructor(props) {
        super(props)
        let now = new Date()
        this.state = {
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDate(),
            picked: false
        }
    };

    nextMonth = () => {
        if (this.state.month === 11) {
            let year = this.state.year;
            this.setState({
                year: ++year,
                month: 0
            })
        } else {
            let month = this.state.month
            this.setState({

                month: ++month
            })
        }
    }
    prevMonth = () => {
        if (this.state.month === 0) {
            let year = this.state.year;
            this.setState({
                year: --year,
                month: 11
            })
        } else {
            let month = this.state.month
            this.setState({
                month: --month
            })
        }
    }

    datePick = (day) => {
        this.setState({ day })
    }

    datePickerToggle = () => {
        this.refs.main.style.height = this.refs.main.style.height === '460px' ? '0px' : '460px'
    }

    picked = () => {
        // let picked = this.state.picked
        // picked = false
    }

    render() {
        let props = {
            viewData: displayDaysPerMonth(this.state.year),
            datePicked: `${this.state.year}年
                  ${this.state.month + 1}月
                  ${this.state.day}日
                `
        }

        return (
            <div className="output">
                <div className="star1"></div>
                <div className="star2"></div>
                <div className="star3"></div>
                <h2 className="datePicked" onClick={this.datePickerToggle}>
                    {props.datePicked}
                </h2>
                <div className="main" ref="main">
                    <CalendarHeader
                        prevMonth={this.prevMonth}
                        nextMonth={this.nextMonth}
                        year={this.state.year}
                        month={this.state.month}
                        day={this.state.day}
                    />
                    <CalendarMain
                        {...props}
                        prevMonth={this.prevMonth}
                        nextMonth={this.nextMonth}
                        datePick={this.datePick}
                        year={this.state.year}
                        month={this.state.month}
                        day={this.state.day}
                    />

                </div>
            </div>
        );
    }
}
