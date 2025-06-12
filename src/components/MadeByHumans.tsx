
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-gradient-to-r from-finxpert-600 to-finxpert-700 p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between">
            <div className="flex items-center text-white">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-3">
                <span className="text-finxpert-600 font-bold text-xs">FX</span>
              </div>
              <span className="text-white text-xl font-medium">FinXpert</span>
            </div>
            
            <div style={{
              overflow: "hidden",
              maxHeight: "80px",
              marginTop: "40px"
            }}>
              <h2 style={{
                marginBottom: "-30px",
                padding: "0px 0px 100px"
              }} className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl">
                Made by RAWx18
              </h2>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
