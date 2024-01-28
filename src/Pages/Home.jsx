import React from "react";
import Hero from "../Components/Hero";
import WithBreadcrumbs from "../Components/WithBreadcrumbs";

function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

export default WithBreadcrumbs(Home);
