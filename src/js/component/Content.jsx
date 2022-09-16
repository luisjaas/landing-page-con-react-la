import React from "react";

export const Content = () => {
    return(
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="btn btn-primary btn-lg" type="button">Call to action!</button>        
        </div>
      </div>
      
    );
};