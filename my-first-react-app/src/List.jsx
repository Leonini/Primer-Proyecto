const people = [
    'Creola Katherine Johnson: médica',
    'Mario José Molina-Pasquel Henríquez: mecánico',
    'Mohammad Abdus Salam: choro',
    'Percy Lavon Julian: político',
    'Subrahmanyan Chandrasekhar: veterinario'
  ];
  
function List() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    return <ul>{listItems}</ul>;
  }

export default List