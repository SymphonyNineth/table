import React from "react";

import "./person-details.css"


const PersonDetails = (
    { person :{ firstName, lastName, description,
        address: {city, state, streetAddress, zip}
}}) => {
    return (
        <div className="person-details">
            <div>Выбран пользователь <b>{`${ firstName } ${ lastName }`}</b></div>
            <div>Описание:</div>
            <div><textarea readOnly value={ description } /></div>
            <div>Адрес проживания: <b>{ streetAddress }</b></div>
            <div>Город: <b>{ city }</b></div>
            <div>Провинция/штат: <b>{ state }</b></div>
            <div>Индекс: <b>{ zip }</b></div>
        </div>
    )
}

export default PersonDetails;