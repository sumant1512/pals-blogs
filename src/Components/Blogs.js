import { Component } from "react";
import Blog from "./Blog";

class Blogs extends Component {
  blogs = [
    {
      title: "Blog1",
      description: "Description 1",
      updatedMin: "1",
      img: "https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg",
    },
    {
      title: "Blog2",
      description: "Description 2",
      updatedMin: "2",
      img: "https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg",
    },
    {
      title: "Blog3",
      description: "Description 3",
      updatedMin: "3",
      img: "https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg",
    },
  ];
  constructor() {
    super();
    this.state = { blogs: this.blogs };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.blogs.map((element) => {
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
          {/* <div className="col-md-4">
            <Blog
              title="Blog1"
              description="Description 1"
              updatedMin="3"
              img="https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg"
            />
          </div>
          <div className="col-md-4">
            <Blog
              title="Blog2"
              description="Description 2"
              updatedMin="4"
              img="https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg"
            />
          </div>
          <div className="col-md-4">
            <Blog
              title="Blog3"
              description="Description 3"
              updatedMin="7"
              img="https://www.paintsplatter.oxaart.com/wp-content/uploads/wall-paint-cans.jpg"
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Blogs;
