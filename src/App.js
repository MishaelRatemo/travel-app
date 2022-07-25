import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import data from './data';
function App() {
  const cards_content = data.map((item) => {
    return(
      <Card 
          key = {item.pk}
          {...item}
      />      
    )    
  })
  

  return (
    <div className="App">
      <Nav />   
      <section className='cards'>
        {cards_content}
      </section>   
    </div>
  );
}

export default App;
