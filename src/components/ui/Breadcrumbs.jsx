import { Link } from "react-router-dom";

const Breadcrumbs = ({ path }) => {
  return (
    <div style={{ paddingLeft: "30px" }}>
      <p>
        {path.map((breadcrumb, index) => (
          <span key={index}>
            {index > 0 && " / "}
            <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Breadcrumbs;
