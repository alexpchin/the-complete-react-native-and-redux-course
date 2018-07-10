import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  // Different to the video...
  // The video didn't require you to destructure
  renderItem({ item }) {
    return <ListItem library={item} />;
  }
  
  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    );
  }
}

// Take the global state object
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

// This is weird... Connect returns a function... which you then invoke.
// This is because redux is platform independant? 
export default connect(mapStateToProps)(LibraryList);
