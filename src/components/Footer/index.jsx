import logo from "../../assets/hero.png";

const Footer = () => {
  return (
    <footer className="text-white py-6 bg-black w-auto flex flex-wrap justify-center">
      <div className="flex flex-row justify-between mt-20 space-x-20 flex-wrap gap-8 w-full max-w-[1080px] px-4">
        <div className="flex flex-row mr-20">
          <img src={logo} alt="Your Logo" className="w-48 h-48 mb-4" />
        </div>
        <div className="mt-10 text-xl">
          <ul className="space-y-5 ml-20">
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
