import { useState } from 'react'
import './App.css'
import { ControlledForm } from './components/ControlledForm'
import ResumeViewer from './components/ResumeViewer'
import { UncontrolledForm } from './components/UncontrolledForm'

function App() {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: ''
    })

    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   // Handle submit will decide what to do with data i.e sendData(). 
    //   // Will printout form for now
    //   console.log(formData)
    // }

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


      <ControlledForm
        formData={formData}
        onChange={handleChange}
      >

      </ControlledForm>
      <ResumeViewer
        formData={formData}
      ></ResumeViewer>
    </>
  )
}

export default App
