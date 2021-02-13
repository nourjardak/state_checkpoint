import './App.css';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{
        fullName: "jenny",
        bio: "21 years old ",
        imgSrc: "https://citytreq.com/assets/admin/images/default_admin.png",
        profession: "singer"
      }],
      isshow: false,
      counter: 0,
      // min:59,
      // h:0
    }
  }

  timing = () => {
    if (this.state.counter == 59) {
      this.setState({ min: this.state.min + 1 })
      this.setState({ counter: 0 })
      if (this.state.min == 60) {
        this.setState({ h: this.state.h + 1 })
        this.setState({ min: 0 })
      }
    };
  }


  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000);
  }

  change_isshow = () => {
    this.setState({
      isshow: !this.state.isshow
    })
  }

  displayTime = (timeSec) => {
    let h = Math.floor(timeSec / 3600)
    let m = Math.floor((timeSec - h * 3600) / 60)
    let s = timeSec - h * 3600 - m * 60
    return <span>{h.toString().padStart(2, '0')} : {m.toString().padStart(2, '0')} : {s.toString().padStart(2, '0')}</span>
  }
  render() {
    return (
      <div className="container">
        <div>{this.displayTime(this.state.counter)}</div>
        <Button variant="primary" onClick={this.change_isshow}>{this.state.isshow ? 'hide profile' : 'show profile'}</Button>
        {this.state.isshow ? (
          this.state.person.map((el, index) =>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={el.imgSrc} />
              <Card.Body>
                <Card.Title>{el.fullName}</Card.Title>
                <Card.Text>{el.profession}</Card.Text>
                <Card.Text>{el.bio}</Card.Text>
              </Card.Body>
            </Card>
          )) : (<h1>click the button above</h1>)}
      </div>
    )
  }
}

export default App;
