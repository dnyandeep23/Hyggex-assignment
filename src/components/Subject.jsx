import React from "react";
import Bulb from "../Assets/blub.svg";
import Voice from "../Assets/voice.svg";
import Refresh from "../Assets/refresh.svg";
import Frame from "../Assets/frame.svg";
import Left from "../Assets/left-arr.svg";
import Right from "../Assets/right-arr.svg";
import channel from "../Assets/channel.svg";
import Plus from "../Assets/plus.svg";

function Subject() {
  return (
    <div className="p-12 h-full">
      <div className="text-3xl text-blue-800 font-semibold">
        Relations and Functions ( Mathematics )
      </div>
      <div className="flex justify-center items-center w-full m-auto">
        <div className=" flex  gap-5 text-gray-500 font-semibold text-base">
          <ul className="underline underline-offset-8 border-b-blue-950 text-blue-900 font-bold">
            Study
          </ul>
          <ul>Quiz</ul>

          <ul>Test</ul>
          <ul>Game</ul>
          <ul>Others</ul>
        </div>
      </div>
      <div className="m-auto w-[40%] ">
        <div className="bg-gradient-to-tr from-blue-500 to-blue-900 h-80  mt-11  p-6 rounded-3xl">
          <div className="flex justify-between">
            <img src={Bulb} alt="" />
            <img src={Voice} alt="" />
          </div>
          <div className="flex justify-center my-auto  h-48 items-center text-2xl font-semibold text-white">
            9 + 6 + 7x - 2x - 3{" "}
          </div>
        </div>
        <div className="flex  justify-around gap-9 py-4">
          <img src={Refresh} alt="" />
          <div className="flex items-center gap-10">
            <img src={Left} alt="" />
            <p className="text-2xl font-bold">01/10</p>
            <img src={Right} alt="" />
          </div>
          <img src={Frame} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <img src={channel} alt="" />
        <div className="flex items-center gap-4 ">
          <img src={Plus} alt="" />{" "}
          <p className="text-2xl font-bold text-blue-900">Create Flashcard</p>
        </div>
      </div>
    </div>
  );
}

export default Subject;
