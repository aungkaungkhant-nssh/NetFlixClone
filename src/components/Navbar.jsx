import React, { useEffect, useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [scroll,setScroll]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setScroll(true)
            }else{
                setScroll(false)
            }
            
        })
        return ()=> {
             window.removeEventListener("scroll") 
            }
    },[])
    return (
        <div className={`nav ${scroll && "nav__black"}`}>
           <div className="nav__logo">
               <h3>NetFlix</h3>
           </div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0A5vUVeVGOSFIQqc0v7qG-ivfHKj6XOn8BA&usqp=CAU" alt="" className="nav__profile"/>
        </div>
    )
}

export default Navbar
