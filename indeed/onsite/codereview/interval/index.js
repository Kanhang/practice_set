const doesThisGetCalled = () => {
    console.log('Called!!');
    
    return 'Hello world';
  }
  
  const TestComponent = ({ extraText }) => {
     const [blah, setBlah] = React.useState(doesThisGetCalled())
    
    return(
      <div className="box">
        {blah + ' ' + extraText}
      </div>
    );
  }
  
  
  // They don't necessarily need to take props
  // This one also has an explicit return
  const App = () => {
    const [increment, setIncrement] = React.useState(1);
    const [interv,setInterv] = React.useState(-1);
    React.useEffect(() => {
        clearInterval(interv)
      const id =setInterval(() => {
         setIncrement(increment + 1);
      }, 1000)
          console.log(id,increment)
        setInterv(id)
  
    }, [increment]);
    
    return <TestComponent extraText={increment} />
  }
  
  ReactDOM.render(<App />,
  document.getElementById("root"))