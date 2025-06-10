function sendData(data) {
    return new Promise((resolve, reject) => {
      const sheetURL = "https://sheetdb.io/api/v1/nekbg7lch4lbu";
      fetch(sheetURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            resolve(response); // Resolve the promise if the request is successful
          } else {
            reject(`Error: ${response.status} - ${response.statusText}`); // Reject with an error message if there's an error
          }
        })
        .catch((error) => {
          reject(`Fetch error: ${error}`); // Catch any fetch-related errors and reject the promise
        });
    });
  }
  


