import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoBlock({ heading ,image}) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading}></Heading>
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              nemo sequi eveniet iure illum est vitae corporis totam harum
              saepe, velit beatae quod autem non et corrupti! Sunt magnam dicta
              enim molestiae expedita nemo recusandae in quas, possimus
              doloribus quasi ad iure ducimus minus eveniet ipsam eligendi
              ratione beatae corrupti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel quo tenetur aspernatur minima provident
              repellat numquam, assumenda, eius aperiam ipsam, maiores autem
              reprehenderit sed obcaecati molestiae nobis iste voluptates
              facere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vel quo tenetur aspernatur minima provident repellat numquam,
              assumenda, eius aperiam ipsam, maiores autem reprehenderit sed
              obcaecati molestiae nobis iste voluptates facere. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vel quo tenetur
              aspernatur minima provident repellat numquam, assumenda, eius
              aperiam ipsam, maiores autem reprehenderit sed obcaecati molestiae
              nobis iste voluptates facere. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vel quo tenetur aspernatur minima
              provident repellat numquam, assumenda, eius aperiam ipsam, maiores
              autem reprehenderit sed obcaecati molestiae nobis iste voluptates
              facere.
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img
                class="card-img-top"
                src={image}
                alt="image goes here"
              />
              <div class="card-body">
                <h5 class="card-title text-white">Just Click Photos</h5>
                <p class="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quo tenetur aspernatur minima provident repellat numquam,
                  assumenda, eius aperiam ipsam, maiores autem reprehenderit sed
                  obcaecati molestiae nobis iste voluptates facere.
                </p>

                {/* <a href="#" >Go somewhere</a> */}
                <Link class="btn btn-warning btn-block">{heading}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
