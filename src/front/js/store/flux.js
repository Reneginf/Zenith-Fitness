const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      complex: [],
      message: null,
      user: "",
      key: "?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1",
    },
    actions: {
      // Use getActions to call a function within a fuction

      getRecipeData: () => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch${getStore().key}`)
          .then((response) =>
            // if (!response.ok) {
            //   throw Error(response.statusText);
            // }
            // Read the response as json.
            response.json()
          )
          .then((responseAsJson) => {
            // Do stuff with the JSONified response
            setStore({ complex: responseAsJson.results });
            console.log(getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
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
