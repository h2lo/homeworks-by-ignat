import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownHandler: (event:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input
    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onBlur = {setNameCallback}
                   onKeyDown = {onKeyDownHandler}
                   className={inputClass}/>
            <button onClick={addUser}
                    className={s.button}
                    disabled = {!name}>
                add</button>
            <span>{totalUsers}</span>
            <div className = {s.errorWarning}>{error}</div>
        </div>
    )
}
// событие onBlur возникает при потере фокуса на элементе
// кнопка неактивна, пока имя не вводится
export default Greeting
