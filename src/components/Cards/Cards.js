import React, { Component } from "react";
import Card from "./CardUI";
import Card2 from "./Card2UI";


class Cards extends Component {
  render() {
    return (
      //  <div><navbar/>

      <div style={{marginTop: "5rem"}}>
        <div
          className="container-fluid d-flex justify-content-space around"
          id="scards"
        >
          {/* <img className="background" src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="Aleq"></img> */}

          <div className="row">
            {/* <div className="row"> */}

            <div className="col-md-12 col-sm-12 ff" id="first">
              <Card2
                imgsrc="https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="KEYNOTE SESSION"
                content="A Conference or convocation and outlined the themes to be covered in ways that got the participants talking and thinking along the right lines."
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="sec">
              <Card
                imgsrc="https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                title="INVITED TALKS"
                content="The inviter generally sends the invitee a personal note or gives them a call, asks if they’d like to talk at a particular event, and relays details about the event."
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="first">
              <Card
                imgsrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="RESEARCH"
                content="A poster presentation is a way to communicate your research or your understanding of a topic in a concise and visually engaging format."
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="sec">
              <Card
                imgsrc="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="POSTER PRESENTATION"
                content="The creation of new knowledge and/or the use of existing knowledge in a new and creative way so as to generate new concepts, methodologies and understandings."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards; 
