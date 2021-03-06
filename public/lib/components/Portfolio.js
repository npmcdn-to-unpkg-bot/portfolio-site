import React from "react";
import {Link} from "react-router";

class Portfolio extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="./lib/assets/pokemongamess.png" alt="..." />
              <div className="caption">
                <h3>Pokemon Catching Game</h3>
                <p>Try to catch em all! A little game built with the pokeapi and firebase</p>
                <p><a target="_blank" href="http://patrickshaughnessy.github.io/Pokemon-Game/" className="btn learnMore" role="button">Play</a> <a target="_blank" href="https://github.com/patrickshaughnessy/Pokemon-Game" className="btn learnMore" role="button">Github</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="./lib/assets/weatherappss.png" alt="..." />
              <div className="caption">
                <h3>Weather App</h3>
                <p>A weather app using jquery and the weather underground api</p>
                <p><a target="_blank" href="http://patrickshaughnessy.github.io/Weather-App/" className="btn learnMore" role="button">View</a> <a target="_blank" href="https://github.com/patrickshaughnessy/Weather-App" className="btn learnMore" role="button">Github</a></p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="./lib/assets/towersofhanoiss.png" alt="..." />
              <div className="caption">
                <h3>Towers Of Hanoi</h3>
                <p>The classic game created with jquery and variable number of blocks.</p>
                <p><a target="_blank" href="http://patrickshaughnessy.github.io/Towers-of-Hanoi/" className="btn learnMore" role="button">Play</a> <a target="_blank" href="https://github.com/patrickshaughnessy/Towers-of-Hanoi" className="btn learnMore" role="button">Github</a></p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-6 text-center">
            <Link role="button" className="btn learnMore" to="blog">Blog <span className="caret"></span></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
