import React, { Component } from 'react'

export default class ContentTwo extends Component {
    render() {
        return (
            <div>
             <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.img} alt="..." /></div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>{this.props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}
