const Contact = () => {
    return (
        <div className="container" 
        style={{ marginTop: '40px', marginBottom: '50px', height: '100vh' }}>
            <h2>Contact Us</h2>
            <p>We'd love to hear from you. Whether you have a question, want to collaborate, or are
                interested in our research, feel free to reach out to us using the contact information
                below.
            </p>
            <br /> <br />
            <h5>Contact Information</h5>
            <hr />
            <div className="contact-info">
                <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 'bold' }}>Email:</div>
                    <div>fshossain.eee@aust.edu <br />
                        seum.cse@aust.edu  <br /> 
                        reasad.cse@aust.edu  </div>
                </div>


                <hr />

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'nowrap' }}>
                    <div style={{ fontWeight: 'bold' }}>Address:</div>
                    <div>Ahsanullah University of Science and Technology, 141 & 142, Love Road, Tejgaon Industrial Area,
                        Dhaka - 1208, Bangladesh</div>
                </div>


            </div>
            <br /><br />
            {/* <h5>Send Us a Message</h5>
            <br />
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form> */}
            
        </div>

    );
}

export default Contact;

