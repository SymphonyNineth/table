import React from "react";

import "./add-person.css";



const AddPerson = ( { onClose, onPersonAdded } ) => {
   const transmitEvent = ( event ) => {
       event.preventDefault();
       onPersonAdded( document.forms.addPerson );


   }
    return (
        <form className="add-person" name="addPerson" onSubmit={ transmitEvent }>
            <button
                onClick={ () => onClose() }
                type="button" className="close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="form-group">
                <label htmlFor="data-input">ID</label>
                <input required name="id"
                    type="text" className="form-control" id="data-input"
                       placeholder="ID" />
            </div>

            <div className="form-group">
                <label htmlFor="data-input">First Name</label>
                <input required name="firstName"
                    type="text" className="form-control" id="data-input"
                       placeholder="First Name" />
            </div>

            <div className="form-group">
                <label  htmlFor="data-input">Last Name</label>
                <input required name="lastName"
                    type="text" className="form-control" id="data-input"
                       placeholder="Last Name" />
            </div>

            <div className="form-group">
                <label htmlFor="data-input">Email address</label>
                <input required name="email"
                    type="email" className="form-control" id="data-input"
                       placeholder="Email" />
            </div>

            <div className="form-group">
                <label htmlFor="data-input">Phone</label>
                <input required name="phone"
                    type="text" className="form-control" id="data-input"
                       placeholder="Phone" />
            </div>

            <button type="submit" className="btn btn-success">Add</button>
        </form>
    )
}

export default AddPerson;