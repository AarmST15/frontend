import React from "react";
import CustomerList from "../components/CustomerList";
import '../styles/MemberTable.css'
import StaffHeader from "../components/StaffHeader";
import Button from '@mui/material/Button';

export default function MemberTable() {
    return (
        <>
            <div className="bg-choose"></div>
            <StaffHeader />
            <div className="mem-page-title">
            <Button 
                variant="outlined" 
                href='/staff-homepage' 
                className='text-black header-stye' 
                style={{ backgroundColor: 'rgb(255, 255, 255, 0.6)' ,color:'#FFF' ,borderColor:'#000',marginTop:'5px',marginLeft:'150px'}}>
                    <h5 style={{paddingTop:'10px'}}>Back </h5>
            </Button>
                <h1>
                    <b>Member</b>
                </h1>
            </div>
            <div className="mem-table">
                <CustomerList />
            </div>
        </>
    )
}