import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./TextBox.scss";

class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // we check if we got event from input (and it has target property) or just value from Carousel
  onChange = e => this.setState({ value: e.target ? e.target.value : e });
  render() {
    const slides = [
      <div key={1} className="TextBox">
        <h2>Tervetuloa Pentulaan!</h2>
        <p>
          Pentula on web-sovellus pentujen kasvusta ja kehityksestä
          kiinnostuneille kasvattajille ja pennunottajille
        </p>
      </div>,
      <div key={2} className="TextBox">
        <h2>Pidä pentujen tiedot tallessa</h2>
        <p>
          Pentulassa kasvattajat voivat merkata ylös pentueiden tietoja ja
          seurata helposti pentujen kasvua ja kehitystä.
        </p>
      </div>,
      <div key={3} className="TextBox">
        <h2>Pennunottajan apu ja muistilista</h2>
        <p>
          Pentulaan voit merkata ylös koirasi tiedot läpi sen elinajan; mitat,
          rokotus- ja madotusajat yms.
        </p>
      </div>
    ];
    return (
      <div>
        <div className="show-mobile">
          <div className="TextCarousel">
            <Carousel
              infinite
              slidesPerPage={3}
              slidesPerScroll={1}
              animationSpeed={1500}
              autoPlay={6000}
              stopAutoPlayOnHover
              offset={50}
              itemWidth={250}
              clickToChange
              centered
              value={this.state.value}
              onChange={this.onChange}
              slides={slides}
            />
            <Dots
              value={this.state.value}
              onChange={this.onChange}
              number={3}
            />
          </div>
        </div>
        <div className="show-desktop">
          <div className="TextBox">
            <h2>Tervetuloa Pentulaan!</h2>
            <p>
              Pentula on web-sovellus pentujen kasvusta ja kehityksestä
              kiinnostuneille kasvattajille ja pennunottajille
            </p>
          </div>
          <div className="TextBox">
            <h2>Pidä pentujen tiedot tallessa</h2>
            <p>
              Pentulassa kasvattajat voivat merkata ylös pentueiden tietoja ja
              seurata helposti pentujen kasvua ja kehitystä.
            </p>
          </div>
          <div className="TextBox">
            <h2>Pennunottajan apu ja muistilista</h2>
            <p>
              Pentulaan voit merkata ylös koirasi tiedot läpi sen elinajan;
              mitat, rokotus- ja madotusajat yms.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextBox;
