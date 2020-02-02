import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Nav,
  Table,
  ProgressBar,
  Pagination,
  OverlayTrigger,
  Popover,
  Button,
  Collapse
} from "react-bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true
    };
  }
  render() {
    const showPopover = (
      <Popover title="informasi Website">
        Webisite ini dibuat untuk memudahkan dalam pencarian informasi terkini
        tentang berita olahraga
      </Popover>
    );

    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 6 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#"> Liga Inggris </Breadcrumb.Item>
              <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <h3>Rumor Transfer Pemain</h3>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <img
              src="https://img.icons8.com/material/24/000000/spinner-frame-2.png"
              alt="loading"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Semua Transfer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Liga Primer Inggris</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-2">Serie A </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-3">Divisi Primera </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-4">BundesLiga</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Link-5">Liga 1 Indonesia</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELAINI</td>
                  <td>MANCHASTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td>
                    <ProgressBar striped variant="info" now={85} label="85%" />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Luis Nani</td>
                  <td>Sporting CP</td>
                  <td>Orlando City</td>
                  <td>
                    <ProgressBar striped variant="info" now={55} label="55%" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Marek Hamsek</td>
                  <td>Napoli</td>
                  <td>Dalian Yifang</td>
                  <td>
                    <ProgressBar striped variant="info" now={95} label="95%" />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sardar Asmoun</td>
                  <td>Rubin Kazan</td>
                  <td>Zenit ST Petersburg</td>
                  <td>
                    <ProgressBar
                      striped
                      variant="info"
                      now={100}
                      label="100%"
                    />
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Michi Batshuayi</td>
                  <td>Chelsea</td>
                  <td>Cristyal Palace</td>
                  <td>
                    <ProgressBar striped variant="info" now={50} label="50%" />
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Lucas Paizon</td>
                  <td>Chelsea</td>
                  <td>Cheivo</td>
                  <td>
                    <ProgressBar
                      striped
                      variant="info"
                      now={100}
                      label="100%"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col md>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
        <Row>
          <Col>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={showPopover}
            >
              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
            <Button
              variant="primary"
              onClick={() => this.setState({ buka: !this.state.buka })}
            >
              Versi Website
            </Button>
            <Collapse in={this.state.buka}>
              <p>Versi Webisite 1.00</p>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
