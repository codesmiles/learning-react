

import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title  = `Welcome to the new fucking blog`;
  const likes = 50;
  const link = `www.google.com`;

  return (
    <div className="App">
      <div className="content">
        <Home />

        <Navbar />
        
        <p>liked {likes} times</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{ `Sometimes you gats run some mumu stuff to get some mumu results ok react is awesome`}</p>
        <p>{Math.round(Math.random() * 11)}</p>
        <a href={link}>Google search</a>
        
      </div> 
    </div>
  );
}

export default App;
