import React from "react";

const Work = ({
  heading,
  image,
  text,
  gitLink,
  demoLink,
}) => {
  return (
    <div className="flex flex-col gap-10 pt-20 md:flex-row ">
      <div className="flex flex-col justify-between pr-10 md:w-1/2">
        <div className="space-y-14">
          <h1 className="text-3xl font-medium">
            {heading}
          </h1>
          <p className="text-xl">{text}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            <a
              className="text-2xl underline hover:text-blue-600"
              href={gitLink}
              target="_blank"
            >
              Code
            </a>
          </div>
          <div>
            <a
              className="text-2xl underline hover:text-blue-600"
              href={demoLink}
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 ">
        <img
          className="rounded-lg shadow-lg "
          src={image}
          alt="screenshot"
        />
      </div>
    </div>
  );
};

export default Work;
