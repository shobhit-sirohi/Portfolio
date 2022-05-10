import React from "react";

const Work = ({
  heading,
  image,
  text,
  gitLink,
  demoLink,
}) => {
  return (
    <div className="flex flex-col gap-10 pt-8 md:pt-20 md:flex-row ">
      <div className="flex flex-col justify-between md:pr-10 md:w-1/2">
        <div className="space-y-4 md:space-y-14">
          <h1 className="text-3xl font-medium">
            {heading}
          </h1>
          <p className="text-xl">{text}</p>
        </div>
        <div className="flex flex-col pt-4 space-y-1 md:pt-0 md:space-y-2">
          <div>
            <a
              className="text-2xl underline hover:text-orangy "
              href={gitLink}
              target="_blank"
            >
              Code
            </a>
          </div>
          <div>
            <a
              className="text-2xl underline hover:text-orangy "
              href={demoLink}
              target="_blank"
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
