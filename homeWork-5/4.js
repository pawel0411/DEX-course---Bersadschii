const getDataFromAPI = async () => {
  async function f() {

    try {
      let response = await fetch("https://randomuser.me/api");
    } catch(err) {
      (err); // TypeError: failed to fetch
    }
  }
  
  f();
};
