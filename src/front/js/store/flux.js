const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      user: "",
      demo: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getData: (entity) => {
        fetch(`https://wger.de/api/v2/${entity}/`)
          .then((response) => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            // Read the response as json.
            return response.json();
          })
          .then((responseAsJson) => {
            // Do stuff with the JSONified response
            console.log(responseAsJson.results);
            setStore({ [entity]: responseAsJson.results });
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      getPrivateData:async() => {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token "+"3d83a826be68c11ea58b24001f1f46c5fc2c7223"
          }
        }
        const reponse = await fetch ("https://wger.de/api/v2/meal") 
      },
    
      login: (user) => {
        setStore({ user: user });
        return true;
      },

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
