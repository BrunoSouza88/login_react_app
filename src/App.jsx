import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    email:'',
    password:'',
    isDisabled: true,
  }

  handleValidation = () => {
    const { email, password } = this.state;
    
    const validationLength = email.length > 0 && password.length > 0;
    const validationPassword = password.length >=6;
    const validationEmail = email.includes('@') && email.includes('.com');

    this.setState({
      isDisabled: !(validationEmail && validationLength && validationPassword)
    })

  };

  handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    // console.log(value);

    this.setState({
      [name]: value,
    }, 
      this.handleValidation
    );

  }

  render() {

    const { isDisabled } = this.state

   return (
    <div className="App">
      <h1>Tela de Login</h1>
        <div>
          <div>
            <label htmlFor="email">
              Escreva seu e-mail:
                <input
                  type="email"
                  name="email"
                  id="email" 
                  onChange={ this.handleChange }
                /> 
            </label>
          </div>
          <div>
            <label htmlFor="password"> 
              Escreva sua senha:
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={ this.handleChange }
                />
            </label>
          </div>
          <label
            htmlFor="">
              <button
                disabled={ isDisabled }
              >Login</button>
          </label>
        </div>
    </div>
  )
};
}

export default App;
