import React from 'react'
import '../styles/StaffHeader.css'

export default function StaffHeader() {
    return (
        <>
            <div className='staff-header-container'>
                <div className='staff-header-logo'>
                    <a href='/'>
                        <img src='./images/logo-W.png' alt='background'/>
                    </a>
                </div>
                <div className='staff-header-title'>
                    <a href='/staff-homepage'>
                        <h1>Silent Cafe Mange System</h1>
                    </a>

                </div>
            </div>
        </>
    )
}