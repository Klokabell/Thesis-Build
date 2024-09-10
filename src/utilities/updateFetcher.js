const updateFetcher = async (month) => {
  try {
    const res = await fetch("http://localhost:3005/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ month }),
    });
    const fetchedUpdate = await res.json();
    console.log("fetchedUpdate", fetchedUpdate)
    return fetchedUpdate;
  } catch (error) {
    console.log("Data update fetch error: ", error);
  }
};

export default updateFetcher;
