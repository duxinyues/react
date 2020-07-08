import React,{Component} from 'react';

class Picker extends Component{

    render(){
        const {value,onChange,options} = this.props
        return(
            <span>
                <h1>{value}</h1>
                <select 
                    onChange={e=>onChange(e.target.value)}
                    value = {value}
                >
                    {options.map(option=>(
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </span>
        )
    }
}

export default  Picker