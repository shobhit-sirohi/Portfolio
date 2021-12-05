const Footer = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <a
        href="#"
        className="flex flex-col items-center justify-center hover:text-blu"
      >
        <svg
          className="w-8 h-8 transform rotate-180 fill-current hover:text-blu "
          width="34"
          height="39"
          viewBox="0 0 34 39"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1861 0H14.3849V29.0284L3.28693 17.9304L0 21.2543L16.7855 38.0398L33.608 21.2543L30.2472 17.9304L19.1861 29.0284V0Z"
            fill="current"
          />
        </svg>
        <p className="text-xl font-medium ">Back to top</p>
      </a>
    </div>
  );
};

export default Footer;
