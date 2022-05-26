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

export async function getUserInfo(username) {
  const response = await axios.get(
    "https://evening-harbor-41552.herokuapp.com/api/users/" + username
  );
  return response.data;
}

export async function getSubmission(submissionId) {
  const response = await axios.get(
    "https://evening-harbor-41552.herokuapp.com/api/submissions/" + submissionId
  );
  return response.data;
}

export async function comment(submissionId, comment) {
  const response = await axios.post(
    "https://evening-harbor-41552.herokuapp.com/api/submissions/" +
      submissionId +
      "/comments",
    {
      content: comment,
    },
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function likeComment(commentId) {
  const response = await axios.post(
    "https://evening-harbor-41552.herokuapp.com/api/comments/" + commentId + "/likes",
    {},
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function unlikeComment(commentId) {
  const response = await axios.delete(
    "https://evening-harbor-41552.herokuapp.com/api/comments/" + commentId + "/likes",

    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function likeSubmission(subId) {
  const response = await axios.post(
    "https://evening-harbor-41552.herokuapp.com/api/submissions/" + subId + "/likes",
    {},
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function unlikeSubmission(subId) {
  const response = await axios.delete(
    "https://evening-harbor-41552.herokuapp.com/api/submissions/" + subId + "/likes",
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function submit(title, url, text) {
  const response = await axios.post(
    "https://evening-harbor-41552.herokuapp.com/api/submissions/",
    {
      title: title,
      url: url,
      text: text,
    },
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}

export async function replyComment(commentId, reply) {
  const response = await axios.post(
    "https://evening-harbor-41552.herokuapp.com/api/comments/" + commentId,
    {
      content: reply,
    },
    {
      headers: {
        "X-API-KEY": "hzrxmrx06hi1mszm5hphjlopliln4m",
      },
    }
  );
  return response.data;
}
