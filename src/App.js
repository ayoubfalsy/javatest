import './App.css';
import React from "react"
import {BASE_URL, Video_URL} from "./GeneralConstants";
import VideosComposant from "./VideosComponant";
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    componentDidMount() {
        fetch(BASE_URL+Video_URL)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }
  render(){
      const {data}=this.state;
  return (
    <div className="App">

        <p>
          List Videos.
        </p>
          {
            data.map((value,key)=> {
                <VideosComposant video={value} key={key}/>
            })
          }
    </div>
  );
  }
}

export default App;
