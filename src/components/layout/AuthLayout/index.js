import React from "react";
import { LAYOUT_TYPE_BLANK } from "constants/theme.constant";
import { useSelector } from "react-redux";
import View from "views";
import Side from "./Side";

const AuthLayout = (props) => {
  const layoutType = useSelector((state) => state.theme.layout.type);
  console.log(layoutType);
  return (
    <div className="app-layout-blank flex flex-auto flex-col justify-center h-[100vh] bg-white">
      {layoutType === LAYOUT_TYPE_BLANK ? (
        <div className="flex flex-col items-center">
          <View {...props} />
        </div>
      ) : (
        <Side>
          <View {...props} />
        </Side>
      )}
    </div>
  );
};

export default AuthLayout;
