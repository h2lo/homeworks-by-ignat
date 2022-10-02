import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPressHandler: (event:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    let inputClass;
    error ?  inputClass = s.errorInput : inputClass = s.noErrorInput
    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyUp = {onKeyPressHandler}
                   className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className = {s.error_warning}>{error}</div>

        </div>
    )
}

export default Greeting
