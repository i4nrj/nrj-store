import { NavigateBefore } from "@mui/icons-material";
import { useState } from "react";
import "./../ui/discription.scss";
import { Tooltip } from "@mui/material";

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Tooltip>
      <NavigateBefore
        className="scrollTop"
        onClick={scrollTop}
        fontSize="large"
        style={{ height: 60, width: 60, display: showScroll ? "flex" : "none" }}
      />
    </Tooltip>
  );
};
