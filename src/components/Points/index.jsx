import calculatePoint from "../../utils/calculatePoint";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useDebounce from "../../hook/useDebounce";

const LeaderBoard = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["rizz-data"],
    queryFn: async () => {
      const res = await fetch("https://satscreener.com/api/getStx20sItem/rizz");
      return await res.json();
    },
    retry: 2,
  });
  const [walletAddress, setWalletAdress] = useState("");
  const debouncedAddress = useDebounce(walletAddress, 500);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-20">
        <h2 className="text-[40px] sm:text-6xl lg:text-7xl text-orange-100 mt-10">
          VIKING POINTS
        </h2>
      </div>

      <div className="mb-20">
        <form onSubmit={handleSearch} className="flex justify-center gap-2">
          <input
            type="text"
            name="address"
            value={walletAddress}
            onChange={(e) => setWalletAdress(e.target.value)}
            placeholder="Enter STX wallet address"
            className="border border-gray-300 rounded-[40px] px-4 py-2 w-80"
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
          <tbody className="text-center text-black">
            {isPending ? (
              <tr>
                <td colSpan="4" className="py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              data
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
                    <td className="py-2 px-4">{item.wallet}</td>
                    <td className="py-2 px-4">{item.balance}</td>
                    <td className="py-2 px-4">
                      {calculatePoint(item.balance)}
                    </td>
                  </tr>
                ))
            )}
            {error && (
              <tr>
                <td colSpan="4" className="py-4 text-red-500">
                  An error occurred
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
