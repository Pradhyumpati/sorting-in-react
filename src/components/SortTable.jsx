import React from "react";
import { useState } from "react";
import MockData from '../MOCK_DATA.json'
export default function SortTable()
{
    const [data, setdata]=useState(MockData)
    const [order, setorder]=useState("ASC")
    const sorting = (col) =>{
        if(order === "ASC")
        {
            const sorted =[...data].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
            
            );
            setdata(sorted);
            setorder("DSC");
        }

        if(order === "DSC")
        {
            const sorted =[...data].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
            
            );
            setdata(sorted);
            setorder("ASC");
        }

    };
    return(
        <div>
<table>
    <thead>
         
        <th onClick={()=>sorting("first_name")}>First name</th>
        <th onClick={()=>sorting("age")}>age</th>
    </thead>
    <tbody>
        {data.map((d)=>(
            <tr key={d.id}>
                
                <td>{d.first_name}</td>
                <td>{d.age}</td>
            </tr>
        ))}
    </tbody>
    
</table>
 
<button onClick={()=>sorting("first_name")}>sortbyname</button>
<button onClick={()=>sorting("age")}>sortbyage</button>
        </div>
    )
}