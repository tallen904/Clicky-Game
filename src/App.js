import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'react-bootstrap'
import Score from './components/Score'
import images from './images.json'
import ImageContainer from './components/ImageContainer'

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
      score: 0,
      highestScore: 0,
      images: images
      }
      this.updateImage = this.updateImage.bind(this)
    }

  updateImage(img){
    var score = this.state.score;
    var highestScore = this.state.highestScore;
    console.log(img)
    const images = this.state.images.map(image => {
      if(image.name === img && !image.clicked){
        image.clicked = 1
        score++
        this.setState({ score })
        if(score > highestScore){
          highestScore++
          this.setState({ highestScore })
        }
      } else if(image.name === img && image.clicked){
        score = 0
        this.setState({ score })
        this.state.images.map(image => image.clicked = 0)
      }
      return image
    }).sort(function(a, b){return 0.5 - Math.random()})
    this.setState({ images })
  }
  render() {
    return <div className="App container">
        <PageHeader>
          React Memory Game<br></br><small>Click the images to increase your score, but don't click the same one twice!</small>
        </PageHeader>
        <Score score={this.state.score} highestScore={this.state.highestScore}/>
        <ImageContainer updateImage={this.updateImage} images={this.state.images} />
      </div>;
  }
}

export default App;
