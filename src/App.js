import React from 'react';

import CV from 'react-cv'
import { CVData } from './data';

class App extends React.Component {
  render () {
    return (
      <div>
        <CV {...CVData} />
      </div>
    )
  }
}

export default App;
