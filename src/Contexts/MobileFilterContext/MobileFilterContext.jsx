import React, { createContext, useState } from 'react'

const MobileFilterContext = createContext()

export const MobileFilterContextProvider = (props)=>{

        const [isOpen, setIsOpen] = useState(false)

        const toggleMenu = ()=>{
            setIsOpen(!isOpen)
        }

    return (
        <MobileFilterContext.Provider value={{isOpen, toggleMenu}}> 
            {props.children}
        </MobileFilterContext.Provider>
    )
    }


export default MobileFilterContext