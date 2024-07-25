import { useState } from "react"


export function ErrorPage ( {error} ) {

    
     const [value] = useState(error.name) 
     const [lastname] = useState(error.lastName)

    return (
        <>
          <h2>Тебе сюда нельзя - {value} {lastname}</h2>  
        </>
    )

}