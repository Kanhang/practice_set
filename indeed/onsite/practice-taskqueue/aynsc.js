const reduceApiEndpoints = async (previous, endpoint) => {
    await previous;
    return endpoint();
  };
  
  const apiEndpoints= [];
  apiEndpoints.push()
  const sequential =()=> apiEndpoints.reduce(reduceApiEndpoints, Promise.resolve());

  const testFn = ()=>{
    setTimeout(()=>{
      console.log('1')
    },1000)
}
apiEndpoints.push(testFn)
apiEndpoints.push(testFn)
apiEndpoints.push(testFn)
apiEndpoints.push(testFn)
apiEndpoints.push(testFn)
sequential()