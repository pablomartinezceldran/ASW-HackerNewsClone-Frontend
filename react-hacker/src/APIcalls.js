const axios = require("axios");

export async function getSubmissions(query) {
  const response = await axios.get(
    "https://evening-harbor-41552.herokuapp.com/api/submissions",
    {
      params: {
        ordered_by: query,
      },
    }
  );
  return response.data;
}
