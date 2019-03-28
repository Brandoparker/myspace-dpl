import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { friends: [], };
  
  componentDidMount() {
    axios.get('/api/friends')
      .then(res => this.setState({ friends: res.data, }))
  }
  
  sample = () => {
    const { friends, } = this.state;
    if (friends.length) {
      const index = Math.floor(Math.random() * friends.length);
      return friends[index];
    } else {
      return null;
    }
  }
  
  downVote = (id) => {
    let { friends, } = this.state;
    this.setState({ friends: friends.filter( c => c.id !== id ), });
  }
  
  upvote = (id) => {
    let { friends, } = this.state;
    axios.put(`/api/friends/${id}`)
      .then( () => this.setState({ friends: friends.filter( c => c.id !== id ), }) )
  }


  render() {
    const friend = this.sample();
    if (friend) {
      return (
        <div>
          <br />
          <Header as='h1'>friends</Header>
          <br />
          <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Card.Description>
                { friend.location }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(friend.id)}>
                <Icon name="thumbs down" />
              </Button> 
              <Button color="green" icon basic onClick={() => this.upvote(friend.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_friends">
            <Button color="blue">
              My friends
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More friends</Header>
    }
  }
}

export default Home;
