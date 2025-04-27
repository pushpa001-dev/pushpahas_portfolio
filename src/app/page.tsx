/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Intro from "./components/intro/intro";
import Bio from "./components/Bio";
import My_projects from "./components/My_projects";


const page = () => {
  return (
    <>
      <Intro />
      <Bio />
      <My_projects />
   
    </>
  );
};

export default page;
