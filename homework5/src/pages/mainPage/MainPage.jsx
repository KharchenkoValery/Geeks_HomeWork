import { useEffect, useState } from "react"

function MainPage (){
    const [valueInput, setValueInput] = useState("")
    const [list, setList] = useState([])
    function newValue(){
        
        if (valueInput !== "" ){
            setList([valueInput, ...list ])  
        } 
    }
    function changeValue (index) {
        const newList = [...list]
        newList[index] = valueInput
        setList(newList)
    } 
    return(
        <div>
         <input type="text" onInput={e=>setValueInput(e.target.value)}  />
         <button onClick={newValue} >Add</button> 
      
         <div>
            {
                list.length !== 0 ? 
                <ul>
                    {
                        
                        list.map((el, index)=>  
                          <div key={index}>
                             <li> {el}</li>
                             <button onClick={()=> changeValue(index) }> Change</button>
                          </div>
                        ) 
                    }
                </ul> : 'Empty list '
            }
    
         </div>
        </div>
    )
} 
export default MainPage