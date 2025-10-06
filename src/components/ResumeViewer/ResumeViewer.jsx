import '../../styles/resume-viewer.scss'
import { EducationForm } from '../Form/EducationForm';
import ContactViewer from './ContactViewer';
import EducationViewer from './EducationViewer';


function ResumeViewer( { formData } ) {
    return(
        <>
          <div className="resume-viewer">

            <ContactViewer
              formData={formData}
            ></ContactViewer>
            
            <EducationViewer
              formData={formData}
            ></EducationViewer>

          </div>
        </>
    )
}

export default ResumeViewer;