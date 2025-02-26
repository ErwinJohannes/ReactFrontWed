import Contact from './assets/Contact';
import Hello from './assets/Hello';
import Counter from './assets/Counter';

function App() {
  const helloData = [
    {name: 'Adithep', message: 'Hi Monsiur'},
    {name: 'Ball' ,message: 'Bonjour...'}
  ];

  return(
    <div  className='App'>
      <Counter/>
      {helloData.map((data,index)=> (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Adithep@gmail.com" phone = "0123-456"/>
    </div>
  );

  
}
export default App;