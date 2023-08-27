import _ from "lodash";

export const handleNumberOfPaginationItems = (data, pageSize) => {
  if (data.length <= pageSize) return 0;

  return _.ceil(data.length / pageSize);
};

export const paginate = (data, pageSize, pageNumber) => {
  return _.slice(data, (pageNumber - 1) * pageSize, pageNumber * pageSize);
};
