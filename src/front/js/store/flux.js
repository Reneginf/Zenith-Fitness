const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      workouts: [],
      recipes: [],
      mealData: [],
      vegetarian: [],
      vegan: [],
      keto: [],
      glutenFree: [],
      paleo: [],
      pescaterian: [],
      complex: [],
      message: null,
      user: null,
      journeys: [
        { type: "Build Muscle", nutrition: "", exercises: "", programs: "" },
        { type: "Lose Weight", nutrition: "", exercises: "", programs: "" },
      ],
      userAccounts: [
        {
          name: "John",
          email: "john@gmail.com",
          journey: "Lose Weight",
        },
        {
          name: "Tom",
          email: "tom@gmail.com",
          journey: "Build Muscle",
        },
      ],
      key: "?apiKey=e23e7c5a9ff34fee9bfc874ea36bb9c1",
    },
    actions: {
      // Use getActions to call a function within a fuction
      addJourney: () => {},

      getRecipeData: (ingredient) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch${
            getStore().key
          }&&titleMatch=${ingredient}`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      findByNutrients: (carbs, proteins) => {
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch${
            getStore().key
          }&maxCarbs=${carbs}&minProteins=${proteins}`
        )
          .then((response) => response.json())
          .then((responseAsJson) => {
            setStore({ complex: responseAsJson.results });
            console.log("These are my recipes", getStore().complex);
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });
      },

      loadWorkoutTable: async () => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/workout`
          );
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("data", JSON.stringify(data));
            console.log("The response is ok", response);
            return true;
          }
        } catch (error) {
          throw Error("something went wrong");
        }
      },

      login: (email) => {
        let user = getStore().userAccounts.find((user) => user.email == email);
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
