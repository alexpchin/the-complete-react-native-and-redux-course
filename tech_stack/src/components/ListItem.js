import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View, 
  LayoutAnimation 
} from 'react-native'; 
import { connect } from 'react-redux'; 
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Text 
          style={{ 
            flex: 1,
            paddingLeft: 20,
            paddingRight: 20 }}
        >
          {library.description}
        </Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// Second argument is the props inside the component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

// Arg 1. mapStateToProps
// Arg 2. mutating this actionCreator from a dumb function to something special where the action will be dispatched into the redux store & passes these actions as props
export default connect(mapStateToProps, actions)(ListItem);
