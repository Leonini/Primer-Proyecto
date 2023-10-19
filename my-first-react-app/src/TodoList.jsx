const person = {
    name: 'Welcome to the Los Pollos',
    theme: {
      backgroundColor: 'white',
      color: 'black'
    }
  };
  
function TodoList() {
    return (
    <>
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="my-first-react-app\src\assets\saraza.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
      </>
    );
  }

export default TodoList