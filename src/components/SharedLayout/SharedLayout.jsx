import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from 'components/Navigation/Navigation'
import { Loader } from "components/Loader/Loader";


export const SharedLayout = () => {
    return (
      <div>
        <h1>
          <Navigation />
            </h1>
            <Loader />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    );
  };