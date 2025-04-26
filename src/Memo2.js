import { memo } from "react"

function Memo2()
{
    console.log ("memo2 calling")
    return(
        <>
            <div>
                <h1>Memo Example 2</h1>
            </div>
        </>
    )
}

export default memo(Memo2)