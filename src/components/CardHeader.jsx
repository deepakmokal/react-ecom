import React from "react";
import newTag from "../assets/images/new.svg";
import quality from "../assets/images/quality.svg";
import expoerch from "../assets/images/expert-choice.svg";
import Tooltip from "./common/Tooltip";

const CardHeader = () => {
  return (
    <div className="card-header">
      <p className="tag">Pre-Owened</p>

      <div className="choices">
        <a href="#">
          <Tooltip text="New">
            <img src={newTag} alt="new" />
          </Tooltip>
        </a>

        <a href="#">
          <Tooltip text="Quality Checked">
            <img src={quality} alt="new" />
          </Tooltip>
        </a>
        <a href="#">
          <Tooltip text="Expert Choice">
            <img src={expoerch} alt="new" />
          </Tooltip>
        </a>
      </div>
    </div>
  );
};

export default CardHeader;
