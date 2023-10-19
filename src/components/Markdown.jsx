import React, { useState } from "react";
import Markdown from "react-markdown";

const MarkdownApp = () => {
  const [markDown, setMarkDown] = useState("");

  return (
    <div className="container p-4">
      <h1 className="display-4 p-4 bg-danger text-light m-0 main-heading">
        Markdown App
      </h1>
      <div className="d-flex pt-2" style={{ backgroundColor: "silver" }}>
        <div className="w-50">
          <h6 className="text-danger p-2 text-center">Input</h6>
        </div>
        <div className="w-50">
          <h6 className="text-danger p-2 text-center">Output</h6>
        </div>
      </div>
      <div className="d-flex p-3 wrapper pt-1">
        <div className="w-50">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="15"
            onChange={(e) => {
              setMarkDown(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="w-50 ms-3">
          <div className="bg-light h-100 p-2 rounded">
            <Markdown>{markDown}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownApp;
