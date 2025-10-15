import { Children, useState } from 'react'
import './App.css'
import { GeneralInfoForm } from './components/Form/GeneralInfoForm'
import ResumeViewer from './components/ResumeViewer/ResumeViewer'
import { UncontrolledForm } from './components/UncontrolledForm'
import { EducationForm } from './components/Form/EducationForm'

function App() {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
      // An array of objects [] being used here
      education: [
        {
          id: '',
          degree: '',
          school: '',
          startDate: '',
          endDate: ''
        }
    ]
  })


    console.log(formData.education)
    



    

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

      <div className='web-container'>
        <GeneralInfoForm
          formData={formData}
          onChange={handleChange}
        />

        <EducationForm
          formData={formData}
          setFormData={setFormData}
          
        />
  
        <ResumeViewer
          formData={formData}
        >
          {Children}


        </ResumeViewer>
  
      </div>      
    </>
  )
}

export default App
