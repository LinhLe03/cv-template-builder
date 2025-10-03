import { ControlledForm } from "./ControlledForm";


function ResumeViewer( { formData} ) {
    return(
        <>
          <div className="resume-viewer">
            <h2>{formData.fullName}</h2>
            <h2>{formData.email}</h2>
            <h2>{formData.phoneNumber}</h2>

          </div>
        </>
    )
}

export default ResumeViewer;