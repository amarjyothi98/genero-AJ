import React from 'react'
import './team.css'

export default function Team() {
  let message = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `
  return (
    <section className="section-white">
        <div className="container">
            <div className="row">
                
                <div className="col-md-12 text-center">
                  <h2 className="section-title">
                    The Team Behind this shit 
                  </h2>
                  <p className="setion-subtitle">{ message }</p>
                </div>

                <div className="col-sm-6 col-md-4">
                  <div className="team-item">

                    <img src="/assets/turtle.png" alt="" className="team-img" />

                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
