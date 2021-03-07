import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TextInput as Input} from 'react-native-paper';
import {theme} from '../core/theme';
import {FieldError} from 'react-hook-form';

type Props = React.ComponentProps<typeof Input> & {errorText?: string};

function TextInput({errorText = '', ...props}: Props) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {errorText.length > 0 && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 4,
    paddingTop: 0,
  },
});

export default memo(TextInput);