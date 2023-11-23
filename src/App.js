import React from 'react';
class App extends React.Component{
constructor(){
  super();
  this.state = {
    data: [
      {"name":"roja"},{"age":"15"}
    ]
  };
}

  render(){
    return(
      <>
  {this.state.data.map((item, index) => (
       <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
            </div>
        ))}
      </>
    );
  }
}
export default App