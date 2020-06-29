import React, { Component } from 'react';
import axios from "axios";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import "./images.css";

class Home extends Component {

  constructor() {
    super();
    this.state = {
      images: []
    }
    this.apiSearch = this.apiSearch.bind(this);
  }

  async apiSearch() {
    const response = await axios.get('https://api.unsplash.com/search/photos',
      {
        params: {
          query: 'Bebes'
        },
        headers: {
          Authorization: 'Client-ID Dm0wa503ICk8wDTvfJUVcgVc2s1OLETyND8amOYpkZs'
        }
      }
    )
    this.setState({ images: response.data.results })
  }

  componentDidMount() {
    this.apiSearch()
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {
              this.state.images.map((image) => {
                return (
                  <Col sm="4" key={image.id}>
                    <CardDeck>
                      <Card>
                        <Card.Img variant="top" src={image.urls.regular} style={{width: '345px', height:'300px'}}/>
                        <Card.Body>
                          <Card.Title>{image.alt_description}</Card.Title>
                          <Card.Text>
                          {image.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                      </Card>
                    </CardDeck>
                  </Col>
                )
              })

            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;