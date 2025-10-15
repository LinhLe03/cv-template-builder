function EducationViewer( { formData } ) {
  const educationList = formData.education.map(edu => 
    <div key={edu.id}>
      <p>{edu.degree}</p>
      <p>{edu.school}</p>
      <p>{edu.startDate}</p>
      <p>{edu.endDate}</p>
    </div>
  
  )
    return(
        <>
          <h2>Education</h2>
          <div className="education-viewer">
            {/* <div className="degree">
              <h3>{formData.education.degree}</h3>
              <h4>{formData.education.school}</h4>
            </div>
            
            <div className="date">
              <p>{formData.education.startDate}</p>
              <p>-</p>
              <p>{formData.education.endDate}</p>
              
            </div> */}

            <div>{educationList}</div>
              
          </div>
        </>
    )
}

export default EducationViewer;