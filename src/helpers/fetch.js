export const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `http://localhost:5000/api/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
		
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `http://localhost:5000/api/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Token: `Bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
