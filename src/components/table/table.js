import React from "react";

import "./table.css";

const Table = ( { data, onSort, sortField, hasBeenSorted, sortDirection, onItemSelected }) => {
        //BLACK MAGIC ALERT

        const sortSymbol = hasBeenSorted ? sortDirection === "asc" ? "▲": "▼" : true;
    return (
        <table className="table">
            <thead>
            <tr>
                <th
                    onClick={ () => onSort("id") }
                >
                    ID { sortField === "id" ? sortSymbol: false}
                </th>
                <th
                    onClick={ () => onSort("firstName") }
                >
                    FirstName { sortField === "firstName" ? sortSymbol: false}

                </th>
                <th
                    onClick={ () =>  onSort("lastName") }
                >
                    LastName { sortField === "lastName" ? sortSymbol: false}

                </th>
                <th
                    onClick={ () =>  onSort("email") }
                >
                    Email { sortField === "email" ? sortSymbol: false}

                </th>
                <th
                    onClick={ () => onSort("phone") }
                >
                    Phone { sortField === "phone" ? sortSymbol: false}

                </th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(( i ) => (
                    <tr key={ i.id + i.phone + Math.floor(Math.random() * 1000) + 1000 }
                        onClick={ () => onItemSelected(i)  }
                    >
                        <td>{ i.id }</td>
                        <td>{ i.firstName }</td>
                        <td>{ i.lastName }</td>
                        <td>{ i.email }</td>
                        <td>{ i.phone }</td>
                    </tr>
                ))

             }
            </tbody>
        </table>
    )
}

export default Table;
