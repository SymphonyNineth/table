import React from "react";

import "./table-row.css";

const TableRow = ( { ID, firstName, lastName, email, phone} ) => {
    return (
            <tr>
                <th>{ ID }</th>
                <th>{ firstName }</th>
                <th>{ lastName }</th>
                <th>{ email }</th>
                <th>{ phone }</th>
            </tr>
    )
}

export default TableRow;