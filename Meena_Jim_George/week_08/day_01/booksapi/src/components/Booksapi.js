import React,{PureComponent as Component} from 'react';
// import jsonp from 'jsonp-es6';
import axios from 'axios';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {query:''};
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


    _handleInput(e)
    //use bind to access 'this' here cos we are pssing only _handleInput.
    {
      // console.log(e.target.value);
      this.setState({query: e.target.value});
    }

    _handleSubmit(e){
      e.preventDefault();
      // console.log(this.props);
      this.props.onSubmit(this.state.query);
    }

  render(){
    return(
      <form onSubmit = {this._handleSubmit}>
        <input type = "search" placeholder = "Jaws" onInput = {this._handleInput} />
        <input type = "submit" value = "Search"/>
      </form>
    );
  }
}

class Gallery extends Component{
    render(){
      console.log('this.props: ', this.props);
      return(
      <div>
        <img src = {this.props.images} width = "150" height = "150" alt ={this.props.images} />
      </div>
      );
    }
}


class Booksapi extends Component{

  constructor(props){
    super(props);
    this.state = {images: []};
    this.fetchBook = this.fetchBook.bind(this);
  }

  fetchBook(q)
  {
    console.log('Searching flicker for',q);
    //AJAX except its really JSONP
    const flickrURL = 'https://www.googleapis.com/books/v1/volumes'


    const flickrParams = {
      params: {
        q: q, // search query
        key: 'AIzaSyAAiCRdJuc3KbZmfKzLhPkm4DAoG5-7lcA', // not a secret key
      }
    }

    axios.get(flickrURL, flickrParams).then(function(results){
          console.log(results);
          const images = results.data.items[0].volumeInfo.imageLinks.thumbnail;
          // const title = results.items[0].volumeInfo.title;

          console.log(images);
          this.setState({images});//means images:images.here key and value has same name
        }.bind(this));



  }
  render(){
    return(
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit ={ this.fetchBook }/>
        <Gallery images = {this.state.images}/>
      </div>
    )
  }

}

export default Booksapi;
