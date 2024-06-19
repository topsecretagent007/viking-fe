import { useState } from "react";
import calculatePoint from "../../utils/calculatePoint";
import useDebounce from "../../hook/useDebounce";
import { Link } from "react-router-dom";
import { Discription } from "../Config";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const LeaderBoard = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [discriptionId, setDiscriptionId] = useState(0);
  const debouncedAddress = useDebounce(walletAddress, 500);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // Placeholder static data
  const data = [
    { wallet: "0x8C8D7C46219D9205f056f28fee5950aD564d7465", balance: 1000 },
    { wallet: "0xAbc1234567890Def1234567890abcdef12345678", balance: 750 },
    // Your backend guys will fetch viking data
  ];

  const clickDiscription = (e) => {
    if (discriptionId === e) {
      setDiscriptionId(0);
    } else {
      setDiscriptionId(e);
    }
  };

  return (
    <div className="container mx-auto h-full min-h-[calc(100vh-200px)] p-4">
      <div className="text-center mb-10">
        <h2 className="text-[32px] sm:text-4xl lg:text-5xl text-orange-100 mt-10">
          VIKING POINTS
        </h2>
      </div>

      <div className="mb-10">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center gap-2"
        >
          <input
            type="text"
            name="address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter STX wallet address"
            className="border border-gray-300 rounded-[40px] px-4 py-2 w-full sm:w-80"
          />
          <button
            type="submit"
            className="neon-button py-3 px-6 rounded-[40px]"
          >
            Search
          </button>
        </form>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent border border-gray-300">
          <thead className="bg-transparent text-white">
            <tr>
              <th className="py-2 px-4 border-b">Rank</th>
              <th className="py-2 px-4 border-b">Wallet Address</th>
              <th className="py-2 px-4 border-b">Points</th>
            </tr>
          </thead>
          <tbody className="text-center text-white">
            {data
              ?.filter((item) => {
                return debouncedAddress.toLowerCase() === ""
                  ? item
                  : item.wallet
                      .toLowerCase()
                      .includes(debouncedAddress.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 break-all">{item.wallet}</td>
                  <td className="py-2 px-4">{calculatePoint(item.balance)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="w-full h-full flex flex-col gap-8 items-start justify-center my-10">
        {Discription.map((item, index) => (
          <div
            key={index}
            className="w-full h-full text-white flex flex-col gap-5 p-3 border-b-[3px] border-b-[#e5effd08] cursor-pointer"
          >
            <div
              onClick={() => clickDiscription(item.id)}
              className="w-full h-full flex flex-row justify-between items-center font-bold text-lg"
            >
              <div className=""> {item.text_1} </div>
              {discriptionId === item.id ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropup />
              )}
            </div>
            <div
              className={`${
                discriptionId === item.id
                  ? "h-full opacity-100"
                  : "h-0 opacity-0"
              } w-full flex flex-row text-md font-semibold text-[#ffffff80] duration-300`}
            >
              <div>{item.text_2}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
