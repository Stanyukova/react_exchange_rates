import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
  return (
    <div className="site">
     <Header />
      <div className='container'>
        <main className='body-main'>
        <Rate />
        
        </main>
      </div>

      <div className='container' id='cookie_info'>
        <div className='site-content'>
          <div className='well'>На нашем сайте мы используем cookie для сбора информации теxнического характера.&nbsp;<button className='btn btn-primary btn-sm'>OK</button></div>

        </div>
      </div>


     <Footer />
    </div>
  );
}
}

export default App;
