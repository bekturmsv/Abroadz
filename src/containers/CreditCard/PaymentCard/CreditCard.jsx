
import React from "react";
import Card from "react-credit-cards";
import './CreditCard.css';
import TotalSum from '../../Cart/TotalSum';
import {Link} from 'react-router-dom'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../utils";

import "react-credit-cards/es/styles-compiled.css";

export default class App extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
    formData: null
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <div className="card-div">
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          </div>
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}  className="inputs">
            <div className="form-group">
              <span className="title">Card Number:</span>
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              /> <br/>
            </div>
            <div className="form-group">
            <span className="title">Card Holder Name:</span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                style={{width: '50%'}}
              />
              
            </div>
            <div className="row">
              <div className="more">
                <span className="title-valid">Valid:</span>
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="more">
              <span className="title-valid">Cvc:</span>
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <Link to="/">
              <button className="btn-pay btn-primary btn-block">PAY</button></Link>
            </div><br/>
            <div className="total-sum">
            <TotalSum/>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          </div>
        </div> 
    );
  }
}
