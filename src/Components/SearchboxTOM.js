import React from "react";
import TomtomReactSearchbox from "tomtom-react-searchbox";

function Example() {
  return (
    <TomtomReactSearchbox
      placeholder="Search for all kind of things..."
      onResultChoose={(result) => console.log(result)}
      searchOptions={{
        key: "patPRLfjAM7IGyuyjINYTbG5UUzfIGXA",
        language: "en-Gb",
        limit: 5,
      }}
    />
  );
}

export default Example;
