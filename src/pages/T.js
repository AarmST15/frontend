import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { useState, useEffect } from 'react';

// delete menu
    let menuid;
    let deleteURL = "http://127.0.0.1:8082/menuitem/delete/"
    const deleteMenu = (e) => {
        e.preventDefault()
        const deleteid = {
            menuId: menuid
        }
        console.log(deleteid)
        console.log(JSON.stringify(deleteid))
        fetch(deleteURL + menuid, { method: 'DELETE', body: JSON.stringify(deleteid), headers: { "content-type": "application/json" } })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    
   

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'ID menu',
        field: 'id',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Menu name',
        field: 'name',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Price',
        field: 'price',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Img.',
        field: 'img',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Update Price',
        field: 'salary',
        sort: 'asc',
        width: 150
      }
    ],
    
    rows: [
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '60',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },
      {
        id: 'Tiger Nixon',
        name: 'System Architect',
        price: 'Edinburgh',
        type: '61',
        img: '2011/04/25',
        salary: '$320'
      },

      
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;