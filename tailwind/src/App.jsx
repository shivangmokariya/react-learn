import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj ={
    name:"shivang mokariya",
    age:22
  };
  const myObj2 ={
    name:"hitesh chaudhary",
    age:22
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1><br/>
      <Card  obj={myObj}/>
      <Card  obj={myObj2}/>
    </>
  );
}

export default App;
