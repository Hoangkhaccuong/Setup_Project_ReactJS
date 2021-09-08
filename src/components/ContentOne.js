import React, { Component } from 'react'

export default class ContentOne extends Component {
  handleClickBtn=()=>{
    alert('ok')
  }
    render() {
        return (
            <div>
                 <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5"><img className="img-fluid rounded-circle" src={this.props.img} alt="..." /></div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">{this.props.title}</h2>
                <p>{this.props.content}</p>
              </div>
            </div>
          </div>
          <button className="edit_btn bg-success" onClick={()=>this.handleClickBtn()} >Edit</button>

          <button className=" edit_btn bg-danger" onClick={()=>this.handleClickBtn()}>Delete</button>

        </div>
      </section>
            </div>
        )
    }
}
