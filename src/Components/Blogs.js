import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const url = "./blogs.json";
    const data = await fetch(url);
    const parsedData = await data.json();
    setBlogs(parsedData.blogs);
    setIsLoading(false);
  };

  return (
    <div className="container">
      <div className="row">
        {isLoading && <Spinner />}
        {!isLoading &&
          blogs.map((element) => {
            return (
              <div className="col-md-4" key={element.title}>
                <Blog
                  title={element.title}
                  description={element.description}
                  updatedMin={element.updatedMin}
                  img={element.img}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
