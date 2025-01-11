import React from "react";

const Blog = (props) => {
  let { title, description, updatedMin, img } = props;
  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            Last updated {updatedMin} mins ago
          </small>
        </p>
      </div>
    </div>
  );
};

export default Blog;
