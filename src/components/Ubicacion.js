import React, { Component } from 'react';
import "./Ubicacion.css";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import Card from 'react-bootstrap/Card';



export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 24.061999324313447,
        lng: -104.61791298465849
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));

  };

  render() {
    return (

      <>
        <useEffect />
        <br />
        <br />
        <br />
        <h1>¡Visitanos!</h1>


        <div className='cardUbicacion' data-aos="fade-right" >
        <Card style={{ width: '20rem', height:'31rem', marginLeft:'75%', position:'absolute'}}>
          <Card.Body className='body'>
            
          <div className=' titulo border-bottom border-light'>
            <Card.Title className=' card-title fs-1'>Ubicación</Card.Title>
          </div>

          <div className='subtitulo'>
            <Card.Subtitle className=" card-text fs-6">Visitanos y degusta de nuestra comida</Card.Subtitle>
          </div>
            <Card.Text>
              <h4 >Nos ubicamos en:</h4>

              <h6>Colonia:</h6>
              <p>Paso real</p>

              <h6>Calle:</h6>
              <p>Cam. del Monarca</p>
              
              <h6>No. casa</h6>
              <p>144</p>
              
            </Card.Text>
          </Card.Body>
        </Card>
        </div>

        <div id='Ubicacion' className='googleMaps' >
          <Map
            style={{ width: "70%", height: "70%", backgroundColor: "#black", marginLeft: "5%" }}
            google={this.props.google}
            initialCenter={{
              lat: this.state.mapCenter.lat, 
              lng: this.state.mapCenter.lng
            }}
            center={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} >

            <Marker
              position={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
              }} />
          </Map>
        </div>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA2c6qaPcmQPRBnKMGZN4unrftssqfO-VU')
})(MapContainer)

