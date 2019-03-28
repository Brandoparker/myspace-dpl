import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { characters: [], };
  
  componentDidMount() {
    axios.get('/api/characters')
      .then(res => this.setState({ characters: res.data, }))
  }
  
  sample = () => {
    const { characters, } = this.state;
    if (characters.length) {
      const index = Math.floor(Math.random() * characters.length);
      return characters[index];
    } else {
      return null;
    }
  }
  
  downVote = (id) => {
    let { characters, } = this.state;
    this.setState({ characters: characters.filter( c => c.id !== id ), });
  }
  
  upvote = (id) => {
    let { characters, } = this.state;
    axios.put(`/api/characters/${id}`)
      .then( () => this.setState({ characters: characters.filter( c => c.id !== id ), }) )
  }


  render() {
    const character = this.sample();
    if (character) {
      return (
        <div>
          <br />
          <Header as='h1'>Characters</Header>
          <br />
          <Card key={character.id}>
            <Image src={character.avatar} />
            <Card.Content>
              <Card.Header>
                { character.name }
              </Card.Header>
              <Card.Description>
                { character.location }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(character.id)}>
                <Icon name="thumbs down" />
              </Button> 
              <Button color="green" icon basic onClick={() => this.upvote(character.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_characters">
            <Button color="blue">
              My Characters
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Characters</Header>
    }
  }
}

export default Home;
