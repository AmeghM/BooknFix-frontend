import React from "react";

function PreLoader() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5740ab7bf8baf3f38df22707/1497730579105-JOEOV1GZJJIPWFORCWVO/image-asset.gif"
        alt="preloader"
        style={{ height: "500px" }}
      />
      <img
        src="https://art.pixilart.com/ca55d1f91b2cb0d.gif"
        alt=""
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
}

export default PreLoader;
