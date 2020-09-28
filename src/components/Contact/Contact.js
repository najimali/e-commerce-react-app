import React from "react"
import Heading from "../Reusable/Heading"
export default function Contact() {
  return (
    <section>
      <Heading title="Contact Us"></Heading>
      <div className="col-6 col-sm-6 mx-auto">
        <form action="https://formspree.io/mrgobepa" method="post" className=''>
          <div className="form-group ">
            <input type="text" name="name" id="name"  placeholder="Your Name" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email"  placeholder="Your Email" className="form-control"/>
          </div>
          <div className="form-group">
            <input type='tel' name="mobile" id="mobile"  placeholder="Your Mobile" className="form-control"/>
          </div>
          <div className="form-group" rows="10">
            <textarea type="description" name="description" id="description"  placeholder="Your messages goes here..." className="form-control"/>
          </div>
          <div className="form-group d-flex justify-content-center flex-column">
          <button type="submit" className='btn btn-outline-info btn-block col-4 mx-auto'>Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
