
import { Description } from "../../components/description/Description";

let ob =  {
        title: "Title 2",
        description: "Description 2"
    }

export function AboutPage () {

    const someOb = <Description info={ob}/>
        
    return (

        <>
           {
            someOb
           }
          
        </>
    )
}