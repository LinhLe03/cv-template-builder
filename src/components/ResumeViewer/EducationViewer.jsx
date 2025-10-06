function EducationViewer( { formData } ) {
    return(
        <>
          <h2>Education</h2>
          <div className="education-viewer">

            <div className="degree">
              <h3>{formData.degree}</h3>
              <h4>{formData.school}</h4>
            </div>
            
            <div className="date">
              <p>{formData.startDate}</p>
              <p>-</p>
              <p>{formData.endDate}</p>
              
            </div>
          </div>
        </>
    )
}

export default EducationViewer;