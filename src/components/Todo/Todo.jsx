import { useState } from "react"

export default function Todo({todoData,isFinished}) {

  const [finished,setFinished] = useState(isFinished);


  return (
    <div>
        <input 
          type="checkbox" 
          checked={finished}
          onChange={(e) => { setFinished(e.target.checked) }}
          />
        <h1> {todoData} </h1>
        <button> Edit </button>
        <button> Delete </button>
    </div>
  )
}