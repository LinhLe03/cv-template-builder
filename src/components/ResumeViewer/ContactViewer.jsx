function ContactViewer( { formData } ) {
    return(
        <>
        <h2>{formData.fullName}</h2>

        <div className="contact-viewer">
            
          <p>{formData.email}</p>
          <p>{formData.phoneNumber}</p>
        </div>
        </>
    )
}

export default ContactViewer;