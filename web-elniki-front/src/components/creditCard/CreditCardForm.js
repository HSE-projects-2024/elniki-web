import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
    error: {
      number: false,
      name: false,
      expiry: false,
      cvc: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate input values based on card requirements
    let isError = false;
    if (name === "number" && !/^\d+$/.test(value)) {
      isError = true;
    } else if (name === "name" && !/^[a-zA-Z ]+$/.test(value)) {
      isError = true;
    } else if (name === "expiry" && !/^\d\d\/\d\d$/.test(value)) {
      isError = true;
    } else if (name === "cvc" && !/^\d{3,4}$/.test(value)) {
      isError = true;
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
      error: { ...prev.error, [name]: isError },
    }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="mt-3">
        <form>
          <div className="mb-3">
            <input
              type="text" // Change type to text for number and name inputs
              name="number"
              className={form-control ${state.error.number ? "error" : ""}}
              placeholder="Номер карты"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            {state.error.number && <span className="error-msg">Неверный формат</span>}
            {state.number.length === 16 && !isNaN(state.number) ? null : state.number.length === 0 ? null : <span className="error-msg">Неверный формат номера</span>}
          </div>
          <div className="mb-3">
            <input
              type="text" // Change type to text for number and name inputs
              name="name"
              className={form-control ${state.error.name ? "error" : ""}}
              placeholder="Имя"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
            />
            {state.error.name && <span className="error-msg">Неверный формат</span>}
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <input
                type="text" // Change type to text for expiry and cvc inputs
                name="expiry"
                className={form-control ${state.error.expiry ? "error" : ""}}
                placeholder="Годен до"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              {state.error.expiry && <span className="error-msg">Неверный формат</span>}
            </div>
            <div className="col-6 mb-3">
              <input
                type="text" // Change type to text for expiry and cvc inputs
                name="cvc"
                className={form-control ${state.error.cvc ? "error" : ""}}
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              {state.error.cvc && <span className="error-msg">Неверный формат</span>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCardForm;