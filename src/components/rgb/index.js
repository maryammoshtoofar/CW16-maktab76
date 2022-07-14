import React, { Component } from 'react';
import {ColorDiv, Text, Wrapper} from './styles';

class Rgb extends Component {
    state = { r:100, g:100, b:100  } 
    render() { 
        return (
          <Wrapper>
            <div>
                <ColorDiv>
                <Text color = "red">
                   RED
                </Text>
                </ColorDiv>
                <ColorDiv>
                <Text color = "blue">
                    BLUE
                </Text>
                </ColorDiv>
                <ColorDiv>
                <Text color = "green">
                    GREEN
                </Text>
                </ColorDiv>
            </div>
            <div style={{backgroundColor:`rgb(${this.state.r}, ${this.state.g},${this.state.b})`}}>
                {`RGB (${this.state.r},${this.state.g},${this.state.b})`}
            </div>
          </Wrapper>
        );
    }
}
 
export default Rgb;