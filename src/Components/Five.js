import React from "react";
import Six from "../Components/Six";
import data from "./Eight";

const Five = (props) => {
  return (
    <>
      <div className="text-center">
        <h1>Welcome to my world</h1>
        <p>
          This is first website all basic topic will be covered from here{" "}
          <mark>This cards displayed via Props</mark>
        </p>
      </div>
      <div className="container my-3">
        <div className="row">
          <Six
            imagesSrc={data[0].imagesSrc}
            title={data[0].title}
            text={data[0].text}
            btn={data[0].btn}
          />

          <Six
            imagesSrc={data[1].imagesSrc}
            title={data[1].title}
            text={data[1].text}
            btn={data[1].btn}
          />

          <Six
            imagesSrc={data[2].imagesSrc}
            title={data[2].title}
            text={data[2].text}
            btn={data[2].btn}
          />

          <Six
            imagesSrc={data[3].imagesSrc}
            title={data[3].title}
            text={data[3].text}
            btn={data[3].btn}
          />

          {/*  or use below format
          <Six  
            imagesSrc="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Web Development"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More..."
            />
            <Six 
            imagesSrc="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
            title="React Js"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More..."
            />
            <Six 
            imagesSrc="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Node Js"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More..."
            />
            <Six 
            imagesSrc="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Python"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            btn="Read More..."
            /> */}
        </div>
      </div>
    </>
  );
};

export default Five;
