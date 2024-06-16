import { FaTelegram, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-white rounded-full h-8 text-medium font-medium px-2 py-1 uppercase">
          Community
        </span>
        <h2 className="relative top-20 mt-0 transform -translate-y-1/2 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text">
            VIKING MULTI-DEX
          </span>
        </h2>
        <h2 className="items-center mt-20 text-[16px] text-center text-white-100">
          Do you want to be part of the Vikings? Join our Telegram,
          <br />
          Follow us on Twitter, Join our Discord channel,
          <br /> and get involved in our community.
        </h2>

        {/* Social media icons */}
        <div className="flex justify-center mt-10 space-x-20 opacity-70">
          <a
            target="_blank"
            href="https://t.me/viking_swap"
            className="text-orange-50 hover:text-orange-50 neon-button py-3 px-4 rounded-full"
          >
            <FaTelegram className="h-8 w-8" />
          </a>
          <a
            target="_blank"
            href="https://x.com/viking_swap"
            className="text-orange-50 hover:text-orange-50 neon-button py-3 px-4 rounded-full"
          >
            <FaTwitter className="h-8 w-8" />
          </a>
          <a
            href=""
            className="text-orange-50 hover:text-orange-50 neon-button py-3 px-4 rounded-full"
          >
            <FaDiscord className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
