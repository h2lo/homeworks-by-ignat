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

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any

        const trimmedName = event.currentTarget.value.trim() // обрезаем пробелы в начале и конце name

        // если trimmedName - true, то ...
        if (trimmedName) {
            setName(trimmedName)
            error && setError('') // микрооптимизация: занулить ошибку, если она там была, т.о. убираем лишний пересет=лишнюю перерисовку
        }
        // если trimmedName - false, т.е '', то ...
        else {
            name && setName('')
            setError('name is required')
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} !`)
        setName('')
        }


    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) { // проверка на наличие веденного name
            addUser()
        }
    }
    const totalUsers = users.length // длина массива = счетчику пользователей

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownHandler={onKeyDownHandler}
        />
    )
}

export default GreetingContainer
