/** @format */

const Footer = () => {
  return (
    <footer className=" text-zinc-400 py-8 px-6 border-t ">
      <div className="sm:flex sm:flex-row sm:max-w-6xl sm:mx-auto sm:justify-between sm:items-center sm:space-y-0 space-y-4">
        {/* Left Part  */}
        <div className="sm:space-y-6 space-y-4">
          {/* Built with -> Platform links with icons */}
          
          {/* Attribution */}
          <div className="flex items-center gap-1.5 dark:text-gray-400 text-gray-700">
            <span>Designed & Built with ❤️ and lots of ☕</span>
          </div>
        </div>

        {/* Right Part  */}
        <div className="">
          <p className="text-center items-center flex gap-2">
            <span className="text-orange-600  ">
            © 2025 Kalyanram Poonamalli
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
