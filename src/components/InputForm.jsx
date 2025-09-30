import { useState } from "react"

export function InputForm() {

    {/* Potential solutions
      1. Group related state into 1 state - still repeated a lot, 
      when the only thing that change is value and name  
      
      2. Mapping with ID
      https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state
      
      3. Use form library i.e React Hook Form...
      
      4. Single State hook with object
      
      ==> Solution 4*/}

    const [formData, setFormData] = useState({
      fullName: '',
      email: ''
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle submit will decide what to do with data i.e sendData(). 
      // Will printout form for now
      console.log(formData)
    }

    const handleChange = (e) => {

      // https://dev.to/sidramaqbool/how-to-handle-forms-in-react-4jml
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,  // Spread operator to take previous data
        [name]: value,  // and dynamically assign name and value of inputs (Computed Property Names)
      }))
    }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <label> Name
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}></input>
        </label>

        <label> Email
          <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
        </label>
      </form>

      <h2>Full Name: {formData.fullName}</h2>
      <h3>Email: {formData.email}</h3>
      
    </>
    )
}