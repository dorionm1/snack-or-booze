### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - JS framework that allows user to handle client side/server side rendering specifically with React applications. 
- What is a single page application?
  - Also known as a SPA, they are web applications that load a single HTML page and dynamically updates the content as the user interacts with the application.
- What are some differences between client side and server side routing?
  - **Client Side Rendering**(CSR):Client-side rendering allows developers to make their websites entirely rendered in the browser with JavaScript. Instead of having a different HTML page per route, a client-side rendered website creates each route dynamically directly in the browser.
  -**Server Side Rendering**(SSR): Server-side rendering (SSR) is an application’s ability to convert HTML files on the server into a fully rendered HTML page for the client.
- What are two ways of handling redirects with React Router? When would you use each?
  - **History API**: By using the history package and creating a history object, we can programmatically navigate between pages or URLs, go back and forward in the browser's history stack, and listen for changes to the URL
  - **<Redirect/> Component**: One of the most common use cases for redirects in a React application is handling user authentication.
  - The History API is more powerful in the object it returns, but this is not needed in every scenario. For example returning user to home page after login.
- What are two different ways to handle page-not-found user experiences using React Router? 
  - Using a `<Switch>` component with a default route.
  - Using a custom `<Route>` component
- How do you grab URL parameters from within a component using React Router?
  - You can use React's `useParams` hook. 
- What is context in React? When would you use it?
  - Allows data to be passed through a component tree without having to pass props manually at every level
  - You can use Context API to easily pass data between components. 
- Describe some differences between class-based components and function
  components in React.
  - **Class**: 
    - Requires you to extend from React. Component and create a render function that returns a React element.
    - It requires different syntax inside a class component to implement hooks.
    - Hooks can be easily used in functional components to make them Stateful.
  - **Functional**:
    - Plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
    - Run from top to bottom and once the function is returned it can’t be kept alive.
- What are some of the problems that hooks were designed to solve?
  - They extract stateful logic from a component so it can be tested independently and reused. They allow code to be more easily reused in an app. Especially when there could be multiple components that have the same function. 