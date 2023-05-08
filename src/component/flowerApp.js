
import React from "react";

import SearchInput from "./Searchinput";

import ImageList from "./imagelist";

import axios from "axios";




class FlowerApp extends React.Component {

  state = { images: [] };

  onSearchSubmit = async(entry) => {

    console.log(entry);

    const response = await axios.get(

     `https://pixabay.com/api/?key=21429398-159083d6175907653743fc5fb&q=${entry}&image_type=photo`

    );

    this.setState({ images: response.data.hits });

    console.log(this);

  }



  render() {

    return (

      <div className="ui container" style={{ marginTop: "28px" }}>

        <SearchInput onSearchSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />

      </div>

    );

  }

}

export default FlowerApp;