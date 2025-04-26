import { useEffect, useState } from "react";
import Memo2 from "./Memo2";

export default function Memo1()
{
    let [test, settest] = useState(0)
    let[count, setcount] = useState(0)

    let addcount = ()=>
    {
        setcount(count + 1);
    }

    useEffect(()=>
    {
        console.log("Calling");
    },[test])
    
    return(
        <>
            <div>
                <h1>Memo Example 1 Count is {count} </h1>

                <button onClick={addcount}>Count</button>

                <Memo2/>
            </div>
        </>
    )
}