import React from 'react'

import Hello from './components/Hello'

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Hello name="some cool stuff" />
      </div>
    )
  }
}

export default App
