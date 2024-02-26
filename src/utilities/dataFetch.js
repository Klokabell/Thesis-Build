const fetchData = async (address) => {
    try {
      const response = await fetch(address);

      if (!response.ok) {
        throw new Error(`HTTP ERROR: Status: ${response.status}`);
      }

      const resData = await response.json();
      return resData
    } catch (error) {
      console.error("Error fetching the data - ", error);
    }
  };

  export default fetchData

