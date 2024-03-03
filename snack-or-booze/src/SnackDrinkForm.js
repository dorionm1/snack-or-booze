import "./App.css";

function SnackDrinkForm({ handleChange, handleSubmit, food }) {
  return (
    <form id="add-food-form">
      <label htmlFor="selectType">Select Type:</label>
      <select id="selectType" name="type" value={food.type} onChange={handleChange}>
        <option value="snack">Snack</option>
        <option value="drink">Drink</option>
      </select>
      <br /><br />
      <label htmlFor="name">Name:</label><br />
      <input type="text" id="name" name="name" value={food.name} onChange={handleChange} /><br />
      <label htmlFor="description">Description:</label><br />
      <textarea id="description" name="description" value={food.description} onChange={handleChange}></textarea><br />
      <label htmlFor="recipe">Recipe:</label><br />
      <textarea id="recipe" name="recipe" value={food.recipe} onChange={handleChange}></textarea><br />
      <label htmlFor="serve">Serve:</label><br />
      <input type="text" id="serve" name="serve" placeholder={food.type === 'snack' ? 'e.g. Serves 4 people' : 'e.g. Serves 2 glasses'} value={food.serve} onChange={handleChange} /><br />
      <br />
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}

export default SnackDrinkForm;