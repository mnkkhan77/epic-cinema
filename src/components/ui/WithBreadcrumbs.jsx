import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { useMemo } from "react";

const withBreadcrumbs = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const pathSegments = useMemo(
      () => location.pathname.split("/").filter((segment) => segment !== ""),
      [location.pathname]
    );

    const breadcrumbsPath = useMemo(
      () =>
        pathSegments.map((segment, index) => ({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          path: `/${pathSegments.slice(0, index + 1).join("/")}`,
        })),
      [pathSegments]
    );

    return (
      <div>
        <Breadcrumbs path={breadcrumbsPath} />
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withBreadcrumbs;
