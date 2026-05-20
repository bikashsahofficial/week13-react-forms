const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    const errorMessage = json.message || json.error || "Request failed";
    throw new Error(errorMessage);
  }

  return json;
};

export default fetchData;
