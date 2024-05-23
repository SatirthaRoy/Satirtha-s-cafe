import React from "react";
import SectionTitle from "../../Shared components/SectionTitle";
import { Rating } from "@material-tailwind/react";

const Addreview = () => {
  return (
    <div className="flex-grow my-11">
      <SectionTitle title="GIVE A REVIEW..." phrase="Sharing is caring" />
      <div className="flex flex-col justify-center items-center gap-6 bg-[#F3F3F3] lg:px-28 w-11/12 mx-auto md:px-16 px-6 py-11">
        <h1 className="cinzel text-3xl font-medium text-center">Rate Us!</h1>
        {/* rating */}
        <Rating/>
        <div className="w-11/12 space-y-5">
          <h3 className="font-semibold">Which recipe you liked the most?</h3>
          <input type="text" className="p-5 rounded-lg w-full" placeholder="Recipe you like most"/>
          <h3 className="font-semibold">Do you have any suggestion for us?</h3>
          <input type="text" className="p-5 rounded-lg w-full" placeholder="Suggestion"/>
          <h3 className="font-semibold">Kindly express your care in a short way.</h3>
          <textarea type="text" className="p-5 rounded-lg w-full" placeholder="Recipe you like most"></textarea>
          <button className="text-white font-semibold p-4 bg-gradient-to-r from-[#835D23] to-[#B58130]">Send Review</button>
        </div>
      </div>
    </div>
  );
};

export default Addreview;
