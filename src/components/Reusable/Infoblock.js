import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function Infoblock({heading}) {
    return (
        <section className='bg-theme my-5 py-4'>
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a minima officiis quo exercitationem ea. Animi a numquam, placeat eligendi saepe ipsa eius in illo laudantium soluta officiis maiores doloremque ullam, aspernatur corrupti nisi quibusdam quos. Dolorum veniam distinctio, velit magnam quibusdam dignissimos, esse saepe cupiditate necessitatibus quisquam voluptatem doloremque.
                            
                        </p>
                        <Link to='/about'>
                            <button className='btn btn-warning btn-lg'>
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
