function Fruit(props) {
  return <li>This is {props.brand}</li>;
}

function Key () {
  const fruits = [
    { id: 1, brand: 'Apple' },
    { id: 2, brand: 'Banana' },
    { id: 3, brand: 'Mango' },
    { id: 4, brand: 'Orange' }
  ];
  return (
    <>
      <h1>List of Fruits</h1>
      <ul>
        {fruits.map((fruit) => <Fruit key={fruit.id} brand={fruit.brand} />)}
      </ul>
    </>
  );
}

export default Key;