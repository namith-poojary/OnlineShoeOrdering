/*
import React from 'react';
class SerachInput extends React.Component
{
    //when we get error undefined
    //constructor==>use binding on this
    //arrow function ==>automatically binding



    constructor()
    {
        super();
        this.onFormSubmit=this.onFormSubmit.bind(this);
    }
 state={entry:''}
 onFormSubmit(event)
 {
     event.preventDefault();
     console.log(this.state.entry);
 }
    render()
    {
        return(
        <div className="ui segment">  
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className='field'>
                    <div className="ui massive icon input">
                    <input type="text" placeholder="searching....!" 
                    onChange={(event)=>this.setState({entry:event.target.value.toUpperCase()})} //controling user input(controlld form)
                    value={this.state.entry}/>
                        <i className='search icon'></i>
                    </div>
                </div>     
            </form>
        </div>)
    }
}
export default SerachInput;
*/

/* onInputChange(event)
 {
     console.log(event.target.value)
 }
 //<input type="text" placeholder="searching....!" onChange={(event)=>console.log(event.target.value)}/>
 */
/*
 import React from 'react';
class SerachInput extends React.Component
{

 state={entry:''}
 onFormSubmit=(event)=>
 {
     event.preventDefault();
     console.log(this.state.entry);
 }
 //for functional comapnent props
 //for class component this.props
    render()
    {
        return(
        <div className="ui segment">  
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className='field'>
                    <div className="ui massive icon input">
                    <input type="text" placeholder="searching....!" 
                    onChange={(event)=>this.setState({entry:event.target.value})} 
                    value={this.state.entry}/>
                        <i className='search icon'></i>
                    </div>
                </div>     
            </form>
        </div>)
    }
}
export default SerachInput;*/
/*
import React from 'react';



class SearchInput extends React.Component {



   

 state = {entry: ' '}



   onFormSubmit = (event) => {

     event.preventDefault()

      this.props.onSearchSubmit(this.state.entry)

      

       

   }

    render() {

        return (

            <div className='ui segment'>

                <form onSubmit={this.onFormSubmit}className='ui form'>

                    <div className='field'>

                    <div className='ui massive icon input'>

                   <input type="text" 

                   placeholder='search.....' 

                   onChange={(event) => this.setState({entry:event.target.value})} 

                   value={this.state.entry}

                    />

                  

                    <i className='search icon'></i>

                    </div>

                    </div>

                </form>

                </div>

        )

    }

}

export default SearchInput;
*/
import React from "react";



class SearchInput extends React.Component {

  /*onInputChange(event) {

    console.log(event.target.value);

  }*/

  /*constructor(){

    super()

    this.onFormSubmit = this.onFormSubmit.bind(this)

  }*/



  state = { entry: "" };

  //onFormSubmit (event)

  //arrow function

  onFormSubmit = (event) => {

    event.preventDefault();

    //console.log(this.state.entry);

    this.props.onSearchSubmit(this.state.entry);

  };



  render() {

    return (

      <div className="ui segment">

        <form onSubmit={this.onFormSubmit} className="ui form">

          <div className="field">

            <div className="ui mssive icon input">

              <input

                type="text"

                placeholder="Search..."

                onChange={(event) =>

                  this.setState({ entry: event.target.value })

                }

                value={this.state.entry}

              />

              <i className="search icon"></i>

            </div>

          </div>

        </form>

      </div>

    );

  }

}

export default SearchInput;