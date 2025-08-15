// ...existing code...

import * as React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';
import { ViewPropTypes, TextPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';

export const labelPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
]);

// ...existing code...
class PopoverTooltipItem extends React.PureComponent {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    onPressUserCallback: PropTypes.func.isRequired,
    label: labelPropType.isRequired,
    containerStyle: ViewPropTypes.style,
  labelStyle: TextPropTypes.style,
  };
  static defaultProps = {
    labelStyle: null,
    containerStyle: null,
  };

  render() {
    const label = typeof this.props.label === 'string'
      ? <Text style={this.props.labelStyle}>{this.props.label}</Text>
      : this.props.label();
    return (
      <View style={[styles.itemContainer, this.props.containerStyle]}>
        <TouchableOpacity onPress={this.onPress}>
          {label}
        </TouchableOpacity>
      </View>
    );
  }

  onPress = () => {
    this.props.onPress(this.props.onPressUserCallback);
  }

}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
  },
});

export default PopoverTooltipItem;
