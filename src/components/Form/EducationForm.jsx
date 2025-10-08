import '../../styles/controlled-form.scss'

export function EducationForm( { formData, onChange, onSubmit }) {


    return (
    <>
      <form className="education" onSubmit={onSubmit} autoComplete="off">

        <label htmlFor="degree"> Degree </label>
        <input 
          type="text"
          id="degree" 
          name="degree"
          value={formData.degree} 
          onChange={onChange} >
        </input>

        <label htmlFor="school"> School </label>
        <input 
          type="text"
          id="school" 
          name="school"
          value={formData.school} 
          onChange={onChange} >
        </input>

        <label htmlFor="startDate"> Start Date </label>
        <input 
          type="text" 
          id="startDate" 
          name="startDate" 
          value={formData.startDate} 
          onChange={onChange}>
        </input>

        <label htmlFor="endDate"> End Date </label>
        <input 
          type="text" 
          id="endDate" 
          name="endDate" 
          value={formData.endDate} 
          onChange={onChange}>
        </input>
      </form>
    </>
    )
}