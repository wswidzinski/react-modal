import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Grid } from 'react-flexbox-grid';
import Header from './Header';
import MainBody from './MainBody';
import Navbar from './Navbar';
import './shared.css';

class MainPage extends React.Component {
  render () {
    return (
      <Grid>
        <Header />
        <Navbar />
        <MainBody />
      </Grid>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById('main'));