import React from 'react';
//import form from 'react';

  
class Login extends React.Component {
  constructor(props) {
  super(props);

  this.state = {value: ''};

  this.Change = this.Change.bind(this);
  
  this.Submit = this.Submit.bind(this);
  }

  Change(event)
   {
    this.setState({
        value: event.target.value
    });
}

Submit(event) {

  
    event.preventDefault();

    const { value } = this.state;

    const re = new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
    const isOk = re.test(value);

    console.log(isOk);

    if(!isOk) {
          return alert('weak!');
        //return window.location.href = "www.google.com";
        
    }
    // window.location.href = "someurl/somepage?var1="+this.state.var1+"&var2="+this.state.var2 + "......";
  
    alert('A password was submitted that was ' + value.length + ' characters long.');
}

  



render(){
    return ( 
      <div className="Login-component"> 
<form  onSubmit={this.Submit}>
  <div className="form">
  Email: <br/>
  <input type="text"  name="email" placeholder="" ></input><br/>
<label>
Password : <br/>
<input type="text" value={this.state.value } onChange={this.Change}></input><br/>
</label>
 <input type="submit" value="Submit" />


</div>

</form>

    </div>
    );
  }
}

export default Login