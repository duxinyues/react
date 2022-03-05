import React, { useState } from "react";
import './form.scss';
const formData = {
    useName: '',
    password: '',
}
export function Form() {
    const [formParam, setFormParam] = useState(formData)
    const handleSubmit = () => {
        console.log(formParam)
    }
    const handleChange = (type, value) => {
        const newFormData = formData;
        newFormData[type] = value;
        console.log(newFormData)
        setFormParam({ ...newFormData })
    }
    return <React.Fragment>
        <div className="form-container">
            <label>
                <span>名字:</span>
                <input value={formParam.useName} onChange={({ target: { value } }) => { handleChange('useName', value) }} />
            </label>
            <label>
                <span>密码:</span>
                <input type="password" value={formParam.password} onChange={({ target: { value } }) => { handleChange('password', value) }} />
            </label>
            <label>
                <button onClick={handleSubmit}>提交</button>
            </label>
        </div>

    </React.Fragment>
}