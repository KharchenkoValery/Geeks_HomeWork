import { Description } from "../../components/description/Description";

let ob =  {
    title: "Title",
    description: "Description"
}

export function MainPage () {
    const someOb = <Description info={ob}/>
    return (

        <>
           {
            someOb
           }           
        </>
    )
}