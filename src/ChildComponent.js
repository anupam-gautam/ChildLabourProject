import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

const ChildComponent = ({ posts }) => {
  return (
    <div>
      {/* API FETCH USING ASYNC AWAIT SYNTAX */}
      <Carousel>
        {posts.map((post) => (
          <div class="row">
            <div class="col-sm-3">
              <div class="card">
                <div class="card-body">
                  <div class="card-header text-center">
                    <b>Post no: {post.id}</b>
                  </div>
                  <h5 class="card-title text-center px-2">{post.title}</h5>
                  <p class="card-text  px-2">{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ChildComponent;
