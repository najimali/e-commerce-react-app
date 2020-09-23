import React from "react"

export default function Teamphotosection() {
  return (
    <div className="row">
        <div className="col-10 col-sm-10 mx-auto">
            <div class="card-group">
            {/* style={{float : 'left', paddingRight : '5px'}} */}
                <div class="card" style={{margin:'0 1rem'}}>
                <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                    </p>
                    <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
                </div>
                <div class="card" style={{margin:'0 1rem'}}>
                <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                    </p>
                    <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
                </div>
                <div class="card" style={{margin:'0 1rem'}}>
                <img
                    class="card-img-top"
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer content
                    than the first to show that equal height action.
                    </p>
                    <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
                </div>
            </div>
      </div>
    </div>
  )
}
