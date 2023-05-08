import React from "react";

const Jumbotron = () => {
  return (
    <div className="col-10 m-auto bg-light rounded">
      <h1 className="text-left pt-2 ps-4">Some Company Header</h1>
      <p className="ps-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        veniam dicta ab eligendi incidunt rem, voluptatem, commodi beatae sint
        tempore possimus ullam repellendus vitae quo quasi labore. Quisquam,
        voluptates suscipit.
      </p>
      <button type="button" className="btn btn-primary ms-4 mb-4">
        Schedule a meeting!
      </button>
    </div>
  );
};

export default Jumbotron;
