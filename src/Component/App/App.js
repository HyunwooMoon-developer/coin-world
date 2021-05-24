import React, { Component } from 'react'
import { Route } from 'react-router'
import CoinDetailPage from '../../Route/CoinDetailPage/CoinDetailPage'
import CoinSummaryPage from '../../Route/CoinSummaryPage/CoinSummaryPage'
import Header from '../Header/Header'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={CoinSummaryPage} />
        <Route path="/coins/:id" component={CoinDetailPage} />
      </div>
    )
  }
}
