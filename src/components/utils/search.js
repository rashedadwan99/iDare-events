import _ from "lodash";

export const searchData = (data, searchQuery, path) => {
  return _.filter(data, (d) =>
    d[path].toLowerCase().includes(searchQuery.toLowerCase())
  );
};
