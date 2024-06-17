import React, { useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { Link } from "react-router-dom";
import STX from "../../assets/STX_token.png";
import Logo from "../../assets/header_logo2.png"; //changes the image route
const VikingTokenPurchase = () => {
  const [stxAmount, setStxAmount] = useState(0);
  const [swapAmount, setSwapAmount] = useState(0);
  const [swapBalance, setSwapBalance] = useState(0);

  const [vikingPoints, setVikingPoints] = useState(null);
  const [connectWallet, setConnectWallet] = useState(false);
  const [swapToken, setSwapToken] = useState(true);

  const handlePurchase = () => {
    const amount = parseFloat(stxAmount);
    if (connectWallet == false) {
      alert("Please connect wallet");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid positive number for STX amount.");
      return;
    }
    setVikingPoints(amount);
  };

  const inputAmount = (e) => {
    setStxAmount(e);
    if (swapToken) {
      setSwapAmount(e * 0.00052);
      setSwapBalance(e * 0.001);
    } else {
      setSwapAmount(e * 1920);
      setSwapBalance(e * 1.92);
    }
  };

  const changeToken = () => {
    setSwapToken(!swapToken);
    setStxAmount(0);
    setSwapAmount(0);
    setSwapBalance(0);
  }


  return (
    <div className="flex flex-col items-center relative overflow-hidden min-h-[calc(100vh-351px)]">
      <div data-aos="flip-right" className="flex justify-center w-full text-lg md:text-2xl text-center font-bold mb-4 z-20  md:p-4 py-10 p-2">
        Buy Viking Tokens with STX Tokens
      </div>
      <div data-aos="flip-down" className="w-full h-full flex flex-col justify-center items-center gap-3 z-20 mb-10">
        <div className="max-w-[430px] w-[90%] h-full px-4 py-5 bg-[#0d0805] border-[1px] rounded-lg border-[#f5f7fa08]">
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="stxAmount"
              className="block text-lg md:text-xl font-medium text-white py-2"
            >
              Swap
            </label>
            {swapToken ? (
              <div
                onClick={() => changeToken()}
                className="justify-end gap-1 flex flex-row items-center cursor-pointer pr-1"
              >
                <img src={Logo} alt="Viking icon" className="w-7 md:w-9" />
                <AiOutlineSwap className="" />
                <img src={STX} alt="STX icon" className="w-6 md:w-8" />
              </div>
            ) : (
              <div
                onClick={() => changeToken()}
                className="justify-end gap-1 flex flex-row items-center cursor-pointer pr-1"
              >
                <img src={STX} alt="STX icon" className="w-6 md:w-8" />
                <AiOutlineSwap className="" />
                <img src={Logo} alt="Viking icon" className="w-7 md:w-9" />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full border-[1px] border-[#f5f7fa08] bg-[#f5f7fa0a] rounded-xl my-1">
            <div className="w-full flex flex-row text-sm md:text-md font-medium items-center justify-between p-3 border-b-[#f5f7fa08] border-b-[1px]">
              <label htmlFor="stxAmount" className="block text-[#717179] ">
                Amount in Token:
              </label>
              <div className="flex flex-row items-center justify-end gap-3">
                {swapToken ? (
                  <img src={Logo} alt="Viking icon" className="w-7 md:w-8" />
                ) : (
                  <img src={STX} alt="STX icon" className="w-6 md:w-8" />
                )}
                <input
                  type="number"
                  id="stxAmount"
                  className="min-w-[70px] w-[90px] outline-none bg-none py-1 border-[#424242] border-[0.5px] rounded-md px-2 truncate"
                  value={stxAmount}
                  onChange={(e) => inputAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex flex-row text-sm md:text-md font-medium items-center justify-between p-3 text-[#717179]">
              <label htmlFor="stxAmount" className="">
                Balance:
              </label>
              <div className="flex flex-row gap-2">
                <p> {swapBalance} </p>
                <div className="cursor-pointer text-[#f89728]">Use Max</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full border-[1px] border-[#f5f7fa08] bg-[#f5f7fa0a] rounded-xl my-1">
            <div
              onClick={() => changeToken()}
              className="w-8 h-8 md:w-10 md:h-10 flex flex-col border-1px border-[#0d0805] text-[#717179] rounded-lg bg-[#040505] justify-center items-center text-2xl absolute mt-[-18px] md:mt-[-24px] right-[45%] md:right-[49%] rotate-90 cursor-pointer"
            >
              <AiOutlineSwap />
            </div>
            <div className="w-full flex flex-row text-sm md:text-md font-medium items-center justify-between p-3 border-b-[#f5f7fa08] border-b-[1px]">
              <label htmlFor="stxAmount" className="block text-[#717179]">
                To Token:
              </label>
              <div className="flex flex-row items-center justify-end gap-3">
                {swapToken ? (
                  <img src={STX} alt="STX icon" className="w-6 md:w-8" />
                ) : (
                  <img src={Logo} alt="Viking icon" className="w-7 md:w-8" />
                )}{" "}
                <div className="min-w-[70px] w-[90px] outline-none bg-none py-1 border-[#424242] border-[0.5px] rounded-md px-2 truncate ">
                  {swapAmount}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row text-sm md:text-md font-medium items-center justify-between p-3 text-[#717179]">
              <label htmlFor="stxAmount" className="">
                Balance:
              </label>
              <div className="flex flex-row gap-2">
                <p> $ {swapBalance} </p>
              </div>
            </div>
          </div>

          <div
            onClick={handlePurchase}
            className="w-full text-center text-md md:text-xl mt-5 cursor-pointer neon-button py-3 px-6 rounded-[40px]"
          >
            {connectWallet ? "Buy Viking Tokens" : "Connect Wallet"}
          </div>

          <div className="flex flex-col w-full text-md md:text-xl border-[1px] border-[#f5f7fa08] bg-[#f5f7fa0a] rounded-lg mt-5 px-4 py-3 text-[#717179]">
            {swapToken ? "1 Viking ≈ 0.00052STX" : "1 STX ≈ 1920 Viking"}
          </div>
        </div>
      </div>
      {
        vikingPoints !== null && (
          <p className="mt-4 text-lg">
            You have purchased Viking tokens worth {stxAmount} STX and earned{" "}
            {vikingPoints} Viking points.
          </p>
        )
      }
    </div >
  );
};

export default VikingTokenPurchase;
