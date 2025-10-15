import '../../styles/controlled-form.scss'


export function EducationForm( { formData, setFormData }) {
    const updateEducation = (event, id) => {
      const { name, value} = event.target
      setFormData((prevData) => ({
        ...prevData,
        education: [
          // for each education entry, if entry's id match the one we want editing
          ...prevData.education.map(edu => 
            edu.id === id 
            ? { ...edu, [name] : value }      // then edit it (similar to how handleChange works dynamically)
            : edu                             // otherwise, leave as it is
          )
        ]
      }))
    }

    const addEducation = (event) => {
      event.preventDefault()
      setFormData((prevData) => ({
        ...prevData, // retain previous data in different sections
        education: [
          ...prevData.education, // retain existing education info + append blank edu info into an array
          {
            id: self.crypto.randomUUID(),
            degree: '',
            school: '',
            startDate: '',
            endDate: ''
          }
        ]
      }))
    }

    const deleteEducation = (id) => {
      setFormData((prevData) => ({
        ...prevData, 
        education: [
          ...prevData.education.filter((edu) => edu.id !== id)
        ]
      }))
    }

    return (
    <>
      <form className="education" autoComplete="off">
        {formData.education.map((edu) => (
        <div key={edu.id} className='edu-item'>
          {/* Implicit label association was used to remove id --> avoid confusion between htmlFor & input id with edu.id 
              Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label#usage_notes*/}
          <label> Degree 
            <input  
              type="text"
              name="degree"
              value={edu.degree} 
              onChange={(e) => updateEducation(e, edu.id)} 
            />
          </label>
  
          <label> School 
            <input 
              type="text"
              name="school"
              value={edu.school} 
              onChange={(e) => updateEducation(e, edu.id)}
            />
          </label>
  
          <label> Start Date 
            <input 
              type="text" 
              name="startDate" 
              value={edu.startDate} 
              onChange={(e) => updateEducation(e, edu.id)}
            />
          </label>
  
          <label> End Date 
            <input 
              type="text" 
              name="endDate" 
              value={edu.endDate} 
              onChange={(e) => updateEducation(e, edu.id)}
            />
          </label>
  
          <button 
            type='submit' 
            onClick={addEducation}>
            Add Education
          </button>

          <button 
            onClick={() => deleteEducation(edu.id)}>
            Delete Education
          </button>
        </div>
        ))}
      </form>
    </>
    )
}