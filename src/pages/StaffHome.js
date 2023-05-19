import React from 'react'
import {
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import '../styles/StaffHome.css'

import Card from '../components/Card';
import StaffHeader from '../components/StaffHeader';

export default function StaffHome() {
    return (
        <>
            <div className='bg-choose'></div>
            <StaffHeader />
            <div className='staff-container-home'>
                <MDBRow className='row-cols-1 row-cols-md-5 g-5'>
                    <MDBCol>
                        <Card img="./images/setting.png" tt="Manage Menu" where='/menu-setting'/>
                    </MDBCol>

                    <MDBCol>
                        <Card img='./images/Order.png' tt="Orders" where='/order-member-manage'/>
                    </MDBCol>                    

                    <MDBCol>
                        <Card img='./images/member.png' tt="Member" where='/member-staff-manage'/>
                    </MDBCol>

                    <MDBCol>
                        <Card img='./images/staff.png' tt="Staff" where='/staff-list'/>
                    </MDBCol>

                    <MDBCol>
                        <Card img='./images/statement.png' tt="Statement" where='/statement'/>
                    </MDBCol>
                    
                </MDBRow>
            </div>

        </>

    )
}