import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (userName: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    let [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(event.currentTarget.value.trim())
        setError('')
    }

    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
         addUser()
        }
    }

    const addUser = () => {
        if (name === '') {
            setError(error = 'name is required')
        } else if (name) {
            alert(`Hello  ${name}!`)
            setName('')
            setError('')
            addUserCallback(name)
        }
    }

    const totalUsers = users.length // счетчик пользователей

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler = {onKeyPressHandler}
        />
    )
}

export default GreetingContainer
