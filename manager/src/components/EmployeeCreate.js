import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Picker } from 'react-native';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            // This comes from EmployeeActions file.
            onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Phone"
            placeholder="07824332502"
            value={this.props.phone}
            // This comes from EmployeeActions file.
            onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
        
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // state.whatever needs to match in the key in the combineReducers call
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);