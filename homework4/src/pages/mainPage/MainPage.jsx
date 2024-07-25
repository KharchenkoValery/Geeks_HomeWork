import { useState } from "react"


export function MainPage ( {user} ) {
  
     const [value] = useState(user.name) 
     const [lastname] = useState(user.lastName)
    
  
    //  setValue(value)

    return (

        <>
          <h2>Добро пожаловать {value} {lastname} мы тебя ждали</h2>  
        </>
    )
}