import { useState } from "react"

export function TextInput() {
    const [fullName, setFullName] = useState('');

    
    return (
    <>

      {/* Potential solutions
      1. Group related state into 1 state - still repeated a lot, 
      when the only thing that change is value and name  
      
      2. Mapping with ID
      https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state
      
      3. Use form library i.e React Hook Form...
      
      --> I'll go with solution 1*/}
      <label>
        <input type="text" onChange={e => setFullName(e.target.value)}></input>
      </label>

      <h2>{fullName}</h2>
      
    </>
    )
}