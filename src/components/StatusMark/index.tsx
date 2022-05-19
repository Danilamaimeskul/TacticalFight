import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from './style';

interface StatusMarkProps {
  team: 1 | 2;
  canAttack: boolean;
  isCurrent: boolean;
}

const StatusMark = (props: StatusMarkProps) => {
  const {team, canAttack, isCurrent} = props;
  if (isCurrent) {
    return <View style={[styles.container, {backgroundColor: 'green'}]} />;
  }
  if (canAttack) {
    return <View style={[styles.container, {backgroundColor: 'red'}]} />;
  }
  if (team === 1) {
    return <View style={[styles.container, {backgroundColor: 'yellow'}]} />;
  } else {
    return <View style={[styles.container, {backgroundColor: 'orange'}]} />;
  }
};

export default StatusMark;
