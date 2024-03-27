import { FunctionComponent } from "react";
import bannerImage from "../../assets/banner-image.png";

const Banner: FunctionComponent = () => {
  return (
    <div className="h-[calc(100vh-71px)] max-h-[823px] xl:mx-[60px] mx-[30px] relative flex items-center">
      <div className="w-1/2 flex gap-4 flex-col items-start">
        <h4 className="2xl:text-xl lg:text-base text-sm">
          Hi there! I'm Alejandro Lucas
        </h4>
        <h1 className="font-semibold 2xl:text-4xl text-3xl">
          Front-end developer, specialized in web development using React,
          TypeScript, HTML5, CSS and more.
        </h1>
        <button className="2xl:text-xl lg:text-base text-sm border rounded p-3 hover:bg-lighterbluegray hover:text-white transition duration-300">
          Download CV
        </button>
      </div>

      <img
        src={bannerImage}
        className="max-w-[650px] absolute bottom-0 right-0"
        alt="banner image"
      />
    </div>
  );
};

export default Banner;
