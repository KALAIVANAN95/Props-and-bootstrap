import React from "react";

const Six = (props) => {
  return (
    <>
      <div className="col-md-3">
        <div class="card">
          <img src={props.imagesSrc} class="card-img-top" alt="logo" />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.text}</p>
            <a href="#" class="btn btn-primary">
              {props.btn}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Six;
