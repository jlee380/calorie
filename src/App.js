import React from 'react';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Wrapper from './layout/Wrapper';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
      
        <Header>
          <h1>My portfolio</h1>
          <p>Irure sunt tempor aliqua proident. Incididunt enim ipsum pariatur veniam excepteur tempor dolore minim non aliqua magna. Nostrud irure deserunt sunt quis aliqua adipisicing ex. Sit nulla nisi ullamco ea qui sit nulla dolore.</p>
        </Header>
      
      <Footer>
          footer text
      </Footer>
      </Wrapper>
    </div>
  );
}

export default App;
