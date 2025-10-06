import '../../styles/controlled-form.scss'

export function GeneralInfoForm( { formData, onChange, onSubmit }) {

    // Controlled Form - handle general information - name, email, phone number

    {/* Potential solutions for handling multiple inputs
      1. Group related state into 1 state - still repeated a lot, 
      when the only thing that change is value and name  
      
      2. Mapping with ID
      https://react.dev/learn/choosing-the-state-structure#avoid-duplication-in-state
      
      3. Use form library i.e React Hook Form...
      
      4. Single State hook with object (aka controlled components) - storing changes in React states
      --> can be buggy
      
      5. Mixing controlled and uncontrolled form 
      (prioritise uncontrolled, then use controlled when needed - not mixing the two --> bad practice)
      --> source: https://dev.to/ajones_codes/a-better-guide-to-forms-in-react-47f0
      */}



    return (
    <>
      <form className="general-info" onSubmit={onSubmit} autoComplete="off">
        <label htmlFor="fullName"> Full Name </label>

        <input 
          type="text"
          id="fullName" 
          name="fullName"
          value={formData.fullName} 
          onChange={onChange} >
        </input>

        <label htmlFor="email"> Email </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={onChange}>
        </input>

        <label htmlFor="phoneNumber"> Phone number </label>
        <input 
          type="text" 
          id="phoneNumber" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={onChange} 
          maxLength={10}>
        </input>
      </form>
    </>
    )
}