import _ from "lodash";

export const sortData = (data, sortBy, sortMethod) => {
  return _.orderBy(data, [sortBy], [sortMethod]);
};
