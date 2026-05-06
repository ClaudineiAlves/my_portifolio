"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AnimationLottieProps } from "@/Types/types";

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: AnimationLottieProps) => {
  return (
    <div style={{ width }}>
      <DotLottieReact
        src={animationPath}
        loop
        autoplay
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default AnimationLottie;
