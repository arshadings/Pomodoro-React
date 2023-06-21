import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = () => {

    const [newTimer, setNewTimer] = useState({
        work: 30,
        short: 5,
        long: 10,
        active: 'work'
    })

    const [workValidate, setWorkValidate] = useState(false)
    const [workEmpty, setWorkEmpty] = useState(false)

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault()   
        if(newTimer.short == 0)       
            confirm("Short Break is set to 0, do you wish to continue ?")
        if(newTimer.long == 0)
            confirm("Long break is set to 0, do you wish to continure ?")
        
        if(!!(newTimer.work)){
            updateExecute(newTimer)
        }
            
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3>Enter the time in minutes</h3>
                <div className="input-wrapper">
                    <input className="input" type="number"  step="0.01" name="work" onChange={handleChange} value={newTimer.work} required/>
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <div>
                {
                   (!(newTimer.work) || newTimer.work <= 0) && setWorkValidate && <span className="text-danger">Work time can not be zero/empty</span>                     
                }
                
                </div>
                <button type='submit' className='set-timer'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro