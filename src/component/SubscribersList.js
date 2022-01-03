//prezentacja danych React-table
//Email, Imie, data.dodania

//wejscie w sybsckrybenta w klikniecie mail lub imie
// pobierze tylko ten rekord z bazy i wyswietli go na liscie
// sluzy do niego component SubscribentDetail.js

import React, {useState} from "react";
import FetchSubs from "./FetchSubs";
import { useTable } from 'react-table';

function SubscribersList() {
    const [user, setUser ] = useState([]);
    const columns = [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      }
    ];
    const data = [
      {
        firstName: 'Alice',
        lastName: 'Johnson',
      },
      {
        firstName: 'Mike',
        lastName: 'Ford',
      },
      {
        firstName: 'John',
        lastName: 'Smith',
      },
      {
        firstName: 'Joe',
        lastName: 'Johnson',
      },
      {
        firstName: 'Linda',
        lastName: 'Ford',
      }
    ];
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    });
    return (
      <div className="App">
        {/* <FetchSubs ue={setUser}/>
        <h1>Subskrybenci: </h1>
        {user && user.map((sub) => 
        <div key={sub.id}>
          <h2>{sub.name}, email: {sub.email}</h2>
        </div>
      )
      } */}
      <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
      </div>
      
    );
}

export default SubscribersList;