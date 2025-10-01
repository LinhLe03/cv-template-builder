import { useState } from "react"
import '../styles/controlled-form.scss'

export function ControlledForm() {

    {/* Potential solutions
      1. Group related state into 1 state - still repeated a lot, 
      when the only thing that change is value and name  
      
      2. Mapping with ID
      https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state
      
      3. Use form library i.e React Hook Form...
      
      4. Single State hook with object (aka controlled components) - storing changes in React states
      --> can be buggy
      
      5. Mixing controlled and uncontrolled form
      --> source: https://dev.to/ajones_codes/a-better-guide-to-forms-in-react-47f0
      */}

    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: ''
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
        <label htmlFor="fullName"> Name </label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}></input>

        <label htmlFor="email"> Email </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>

        <label htmlFor="phoneNumber"> Phone number </label>
        <input type="number" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}></input>
      </form>

      <h2>Full Name: {formData.fullName}</h2>
      <h2>Email: {formData.email}</h2>
      <h2>Phone Number: {formData.phoneNumber}</h2>
      
    </>
    )
}