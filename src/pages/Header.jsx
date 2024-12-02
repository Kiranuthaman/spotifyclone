import { faBell, faDownload, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
faDownload
import "./Header.css"
faBell

function Header() {
    return (
        <>
            <nav className='w-full d-flex align-items-center justify-content-between'>
                <div className=''>
                    <img style={{ width: "100px" }} src="https://imgs.search.brave.com/XTekfaIKD4GIFWmoHxuA9k5LkWZULhhOZMQUNTmb6hg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TcG90aWZ5/L1Nwb3RpZnktSWNv/bi1XaGl0ZS1EYXJr/LUJhY2tncm91bmQt/TG9nby53aW5lLnN2/Zw" alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center" >
                    <div
                        className="bg-dark rounded-circle d-flex align-items-center justify-content-center p-4" style={{ width: "40px", height: "40px" }}>
                        <FontAwesomeIcon icon={faHouse} style={{ color: "#ffffff" }} size="xl" />
                    </div>
                    <div className='d-flex ms-3 bg-dark rounded rounded-5' style={{ width: '450px', height: '50px' }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} size='xl' className='' id='search-icon' />
                        <input type="text" id='inoutbox' className=" rounded rounded-5 ms-2 bg-dark " placeholder="What do you want to play" style={{ width: "350px", color: "white", padding: "10px", }} />
                    </div>
                </div>
                <div className="d-flex justify-content-evenly align-items-center">
                <div className=" d-flex align-items-center justify-content-center me-4">
                        <p className="text-white mb-0"style={{ fontSize: "18px", }}> <FontAwesomeIcon icon={faDownload} size="sm" style={{color: "#ffffff",}} /> Install App</p>
                    </div>

                    <FontAwesomeIcon icon={faBell} size="lg" style={{ color: "#ffffff" }} />
                    <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center ms-4 me-5"
                        style={{ width: "40px", height: "40px",  }} >
                        <p className="text-white mb-0"style={{ fontSize: "18px", fontWeight: "bold",}}>   K </p>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header