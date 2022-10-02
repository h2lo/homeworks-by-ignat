import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <span  className={s.affair_name}>{props.affair.name}</span>
            <span  className={s.affair_priority}>{props.affair.priority}</span>
            <button className={s.affair_button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
