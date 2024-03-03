import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Drink from "./FoodItem";
import SnackDrinkForm from "./SnackDrinkForm";
import NotFound from "./NotFound";

function App() {
  const initialState = {
    id: '',
    type: 'snack',
    name: '',
    description: '',
    recipe: '',
    serve: ''
  }

  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState(initialState);

  //Generates snack/drink id based on snack/drink name user enters. 
  const generateIdFromName = (name) => {
    return name ? name.toLowerCase().replace(/\s+/g, '-') : '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFood({
      ...food,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(food.type === "snack"){
      try {
        await SnackOrBoozeApi.addSnack(food)
        setSnacks([...snacks, food]);
        setFood(initialState)
      } catch (error) {
        console.error('Error adding snack:', error);
      }
    }
    if(food.type === "drink"){
      try {
        await SnackOrBoozeApi.addDrink(food)
        setDrinks([...drinks, food]);
        setFood(initialState)
      } catch (error) {
        console.error('Error adding drink:', error);
      }
    }
  }
  
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  useEffect(() => {
    const generatedId = generateIdFromName(food.name);
    setFood(prevState => ({ ...prevState, id: generatedId }));
  }, [food.name]);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacks={snacks} drinks={drinks}/>
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} menuType="snacks" title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} menuType="drinks" title="Drinks" />
            </Route>
            <Route exact path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <SnackDrinkForm handleChange={handleChange} handleSubmit={handleSubmit} food={food}/>
            </Route>
            <Route exact path="/snacks/:id">
              <Redirect to="/snacks" />
            </Route>
            <Route exact path="/drinks/:id">
              <Redirect to="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
