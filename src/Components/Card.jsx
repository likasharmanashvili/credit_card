import React, { useState } from 'react';
import cardLogo from "./images/card-logo.svg";
import bgCardFront from "./images/bg-card-front.png";
import bgCardBack from "./images/bg-card-back.png";
import completed from "./images/icon-complete.svg"

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('Jane Appleseed');
  const [cardMonth, setCardMonth] = useState('00');
  const [cardYear, setCardYear] = useState('00');
  const [cardCvc, setCardCvc] = useState('000');
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [cvcError, setCvcError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const format = (s) => {
    let cleaned = s.replace(/\D/g, '');
    cleaned = cleaned.replace(/(.{4})/g, '$1 ').trim();
    return cleaned;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError('');
    setNumberError('');
    setMonthError('');
    setYearError('');
    setCvcError('');
    setSubmitted(true);

    if (!cardName) {
      setNameError("Can't be blank");
    }
    if (!cardNumber || cardNumber.length < 16) {
      setNumberError("Can't be blank");
    }
    if (!cardMonth) {
      setMonthError("Can't be blank");
    }
    if (!cardYear) {
      setYearError("Can't be blank");
    }
    if (!cardCvc) {
      setCvcError("Can't be blank");
    }
  }

  return (
    <div className="container">
      {!submitted ? (
        
        <div className="left_section">
        
          <div className="cards">
     
            <div className="front_card">
              <img src={cardLogo} alt="card-logo" className="card_logo" />
              <div className="card_container">
                <img src={bgCardFront} alt="front-card" />
                <h1 id="number">{cardNumber}</h1>
                <div className="card_info">
                  <span id="name">{cardName}</span>
                  <span id="date">
                    <span id="month">{cardMonth}</span> / <span id="year">{cardYear}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="back_card">
              <img src={bgCardBack} alt="back-card" />
              <span id="cvc">{cardCvc}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="thank">
           <img src={completed} alt="card-" className="card" />
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
          <button>Continue</button>
        </div>
      )}
      {!submitted && (
        <div className="right_section">
          <form onSubmit={handleSubmit}>
            <div className="card_1">
              <label htmlFor="card_name">Cardholder Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Appleseed"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
              {nameError && <span className="error_message">{nameError}</span>}
            </div>
            <div className="card_2">
              <label htmlFor="card_number">Card Number</label>
              <input
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                value={cardNumber}
                onChange={(e) => setCardNumber(format(e.target.value))}
                required
              />
              {numberError && <span className="error_message">{numberError}</span>}
            </div>
            <div className="card_information">
              <div id="card_date">
                <label htmlFor="card_date">Exp. Date (MM/YY)</label>
                <div className="two_inp">
                  <div>
                    <input
                      type="number"
                      placeholder="MM"
                      value={cardMonth}
                      onChange={(e) => setCardMonth(e.target.value)}
                      required
                    />
                    {monthError && <span className="error_message">{monthError}</span>}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="YY"
                      value={cardYear}
                      onChange={(e) => setCardYear(e.target.value)}
                      required
                    />
                    {yearError && <span className="error_message">{yearError}</span>}
                  </div>
                </div>
              </div>
              <div className="card_4">
                <label htmlFor="card_cvc">CVC</label>
                <input
                  type="number"
                  placeholder="e.g. 123"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  required
                />
                {cvcError && <span className="error_message">{cvcError}</span>}
              </div>
            </div>
            <button id="submit_btn" type="submit">Confirm</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CardForm;
