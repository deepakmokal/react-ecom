import React, {lazy} from "react";

const PreNav = lazy(() => import("./PreNav"));
const ProfileSection = lazy(() => import("./ProfileSection"));
import "../assets/css/scss/components/_nav.scss";
import { Suspense } from "react";
const Header = () => {
  return (
    <>
      <div className="header-wrapper px-4 py-3">
        <Suspense fallback={<h3>Loading...</h3>}>
          <PreNav />
          <ProfileSection />
        </Suspense>
        
      </div>
    </>
  );
};

export default Header;
