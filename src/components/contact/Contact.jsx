export default function Contact() {
  return(
    <section className="bg-secondary-subtle p-md-5" id="contact">
      <div className="container p-md-5">
        <div className="row">
          <div className="col text-center">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center p-md-5">
          <div className="col">
            <div className="alert alert-success alert-dismissible fade show d-none my-alert" role="alert">
              <strong>Thank You!</strong> We Have Received Your Message.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <form name="submit-to-google-sheet">
              <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="name" className="form-control" id="name" name="name" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" name="message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-send">Send</button>
              <button className="btn btn-primary d-none btn-loading" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};