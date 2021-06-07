export const generateGetResourceList =
  (path, client) =>
  (queries = {}) => {
    const url = `${path}${
      queries && Object.keys(queries).length > 0
        ? Object.keys(queries).reduce(
            (queryString, queryName, index) =>
              `${queryString}${index !== 0 ? '&' : ''}${queryName}=${
                queries[queryName]
              }`,
            '?',
          )
        : ''
    }`;

    return client.get(url).then(({data}) => data);
  };

export const generateGetSingleResource = (path, client) => {
  return (resourceId, queries = {}) => {
    const url = `${path}${resourceId}${
      queries && Object.keys(queries).length > 0
        ? Object.keys(queries).reduce(
            (queryString, queryName, index) =>
              `${queryString}${index !== 0 ? '&' : ''}${queryName}=${
                queries[queryName]
              }`,
            '?',
          )
        : ''
    }`;

    return client.get(url).then(({data}) => data);
  };
};
