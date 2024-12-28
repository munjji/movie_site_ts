import React from "react";
import Movies from "../components/Movies";

const HomePage: React.FC = () => {
  return (
    <div className="w-[1400px] pb-8">
      <Movies endpoint="upcoming" />
    </div>
  );
};

export default HomePage;
