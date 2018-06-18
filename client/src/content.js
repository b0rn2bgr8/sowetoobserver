import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Story from './components/body/Card';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: []
        }
    }

    componentDidMount() {
        this.getProduct();
    }

    async getProduct() {
        try {
            // let response = await fetch('https://discountbuddy.azure-mobile.net/tables/products');
            let response = await fetch('http://localhost:8080/article');
            let result = await response.json();
            console.log("result", result)
            this.setState({
                featured: result
            });
        } catch (err) {
            console.error(err.message)
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Top Stories</h1>
                    </Col>
                    {
                        this.state.featured.map((f, idx) => {
                            return  <Story item={f} key={idx} />
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Content;