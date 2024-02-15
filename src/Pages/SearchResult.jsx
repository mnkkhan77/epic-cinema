import { useLocation } from "react-router-dom";
import { SearchListProvider } from "../Components/Provider/DataProvider";
import ListComponent from "../Components/components/ListComponent";

const SearchResult = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  return (
    <>
      <div style={{ marginTop: "30px", backgroundColor: "#282828" }}></div>
      <SearchListProvider
        query={searchQuery}
        render={({ search, isError }) => (
          <ListComponent data={search} isError={isError} />
        )}
      />
    </>
  );
};

export default SearchResult;
