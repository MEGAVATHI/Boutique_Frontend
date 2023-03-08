import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './final.css';

export default function Table1() {
    const [data, setData] = useState([]);

    async function init() {
        let res = await axios.get('http://localhost:8080/getDress');
        let dat = res.data;
        setData(dat);
        
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/del/${id}`)
            .then((response) => {
                const newdata = data.filter((item) => item.id !== id);
                setData(newdata);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateData = (id, newData) => {
      axios.put(`http://localhost:8080/update/${id}`, newData)
        .then((response) => {
          const newdata = data.map((item) => {
            if (item.id === id) {
              return { ...item, ...newData };
            }
            return item;
          });
          setData(newdata);
        })
        .catch((error) => {
          console.log(error);
        });
    };
   
    useEffect(() => { init() }, [])
    return (
        <div className="body1">
        
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>NPIECES</th>
                    <th>AVAILABLE</th>
                    <th>COLOR</th>
                    <th>MATERIAL</th>
                    <th>CANCEL</th>
                    <th>CHANGE</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.price}</td>
                        <td>{user.nPieces}</td>
                        <td>{user.avail}</td>
                        <td>{user.color}</td>
                        <td>{user.material}</td>
                        
                        
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
  <button
    className="btn btn-secondary"
    onClick={() => {
      const newData2 = prompt("Enter price");
      if(newData2){
        updateData(user.id,{price:newData2});
      }  
      
    }}>
    Update
  </button>
</td>
</tr>
))
}
</tbody>
</table>
</div>
);
}