function Contact() {
  return(
    <>
      <div className='container w-50'>
        <h1 className='my-3'>Contact US</h1>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="9876543345"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Any query?'></textarea>
        </div>
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
