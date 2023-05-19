import AddStaffForm from "../components/AddStaffForm";
import StaffHeader from "../components/StaffHeader";
import StaffTable from "../components/StaffTable";
import Button from '@mui/material/Button';

export default function StaffList() {

    return (
        <>
        <div className="bg-choose"></div>
            <StaffHeader />
            <div className="mem-page-title">
            <Button 
                variant="outlined" 
                href='/staff-homepage' 
                className='text-black header-stye' 
                style={{ backgroundColor: 'rgb(255, 255, 255, 0.6)' ,color:'#FFF' ,borderColor:'#000', marginTop:'20px',marginLeft:'150px'}}>
                    <h5 style={{paddingTop:'10px'}}>Back </h5>
            </Button>
                <h1>
                    <b>Staff</b>
                </h1>
            </div>
            <div>
                <AddStaffForm />
            </div>
            <br></br>
            <div className="staff-list-ctn">
                <StaffTable />
            </div>
        </>
    )
}