import React, { useEffect } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import { SearchProvider } from "../../context/SearchContext";
import { lazy } from "react";
import { Suspense } from "react";

const Header = lazy(() => import("../Header"));

const Landing = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const ispageLoading = navigation.state === "loading";

  useEffect(() => {
    navigate("/preowned/watches");
  }, []);
  return (
    <>
      <div>
        <SearchProvider>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Header />
          </Suspense>

          <div className="p-2">
            {ispageLoading ? (
              <div className=" text-2xl">Loading ...</div>
            ) : (
              <Outlet />
            )}
          </div>
        </SearchProvider>
      </div>
    </>
  );
};

export default Landing;
