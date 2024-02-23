import React, {lazy} from "react";
import newTag from "../assets/images/new.svg";
import quality from "../assets/images/quality.svg";
import expoerch from "../assets/images/expert-choice.svg";
import { Suspense } from "react";


const Tooltip = lazy(() => import("./common/Tooltip"));

const CardHeader = () => {
  return (
    <div className="card-header">
      <p className="tag">Pre-Owened</p>

      <div className="choices">
        <a href="#">
          <Suspense fallback={<h3>Loading...</h3>}>
            <Tooltip text="New">
              <img src={newTag} alt="new" />
            </Tooltip>
          </Suspense>
        </a>

        <a href="#">
        <Suspense fallback={<h3>Loading...</h3>}>
          <Tooltip text="Quality Checked">
            <img src={quality} alt="new" />
          </Tooltip>
          </Suspense>
        </a>
        <a href="#">
        <Suspense fallback={<h3>Loading...</h3>}>
          <Tooltip text="Expert Choice">
            <img src={expoerch} alt="new" />
          </Tooltip>
          </Suspense>
        </a>
      </div>
    </div>
  );
};

export default CardHeader;
