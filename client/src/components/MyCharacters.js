import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyCharacters extends React.Component {
  state = { characters: [], };

  componentDidMount() {
    axios.get('/api/my_characters')
      .then( res => this.setState({ characters: res.data, }) );
  }

  render() {
    const { characters, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { characters.map( character =>
          <Card key={character.id}>
            <Image src={character.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { character.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyCharacters;
