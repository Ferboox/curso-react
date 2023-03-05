import { useEffect, useRef } from "react"

import { NavItem } from "./interfaces/interfaces";

type Props = {
    packageItems: NavItem[],
}

export const CustomNav = ({packageItems}:Props) => {

    
    const references = [
        useRef(null),
        useRef(null)
    ]

    const scrollToSection = (index:number) => {
        if(references[index].current != null){
            window.scrollTo({
                top: references[index].current.offsetTop,
                behavior: 'smooth'
            })
        }
    };

    console.log(references);

    return (
        <div id="customNav">
            <ul>
            {packageItems.map( (item, index) => (
                    <li key={item.name} onClick={() => scrollToSection(index)}>{item.name}</li>
                ))
            }
            </ul>
            <div ref={references[0]} style={{height: "80vh", background: "blue"}}>

            </div>
            <div ref={references[1]} className="contact" style={{height: "80vh", background: "yellow"}}>

            </div>
        </div>
    )
}

