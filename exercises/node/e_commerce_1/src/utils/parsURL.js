const parser = (urlString) => {
  const [, pathName, resourceID] = urlString.split('/');
  return { pathName, resourceID };
};

module.exports = parser;
