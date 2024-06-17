import logo from "../../assets/hero.png";

const Footer = () => {
  return (
    <footer className="text-white py-6 bg-black w-full fiexd bottom-0 justify-between relative">
      <div className="flex flex-row justify-between gap-8 w-full h-full max-w-[1080px] px-4 m-auto">
        <div className="flex flex-row md:mr-20">
          <img src={logo} alt="Your Logo" className="w-20 h-20 md:w-40 md:h-40 mb-4" />
        </div>
        <div className="text-md md:text-xl">
          <ul className="md:ml-20">
            <li>
              <a href="#" className="hover:underline">
                Points
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href=" http://cyberscope.io/audits/viki"
                className="hover:underline"
              >
                Audit Report
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-400">
            © Viking. All Rights Reserved. | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
