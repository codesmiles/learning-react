const Home = () => {
 
    const handleClick = () =>{
       console.log(`Hello shitheads`)
   }
   const tryShitOut =() =>{
       console.log(`Sometimes shitty things happens`)
   }

   const handleClickAgain = (name) =>{
console.log(`Hello ${name}`);
   }
   
    return ( 
        <div className="home">

            <h2 onClick={tryShitOut}>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick = {
                () => handleClickAgain(`Mike`)}>Click me again</button>
        </div>
     );
}
 
export default Home;