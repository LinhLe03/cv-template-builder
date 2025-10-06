import '../styles/controlled-form.scss'
import SaveButton from './SaveButton';

export function UncontrolledForm() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const uncontrolledFormData = new FormData(e.target);
        for (let [ key, value ] of uncontrolledFormData.entries()) {
            console.log(`${key} : ${value}`)
        }  
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="school">School</label>
            <input name="school" id="school"></input>
  
            <label htmlFor="degree">Degree</label>
            <input name="degree" id="degree"></input>
  
            <label htmlFor="start-date">Start Date</label>
            <input name="start-date" id="start-date"></input>
  
            <label htmlFor="end-date">End Date</label>
            <input name="end-date" id="end-date"></input>

            <SaveButton></SaveButton>
          </form>

          
        </>
    )

}