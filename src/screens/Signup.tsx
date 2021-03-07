import React, {memo, useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Header, Button, TextInput, Background, Logo} from '../components'
import {theme} from '../core/theme';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useOvermind} from '../overmind';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParams, SignupFormValues} from '../types';

type NavProps = StackNavigationProp<AuthStackParams, 'Signup'>;
type Props = {
    navigation: NavProps;
}
function Signup({navigation}: Props) {
    const {useLogin} = useOvermind().actions.app;
    const {handleSubmit, control, errors} = useForm<SignupFormValues>();

    const onSubmit: SubmitHandler<SignupFormValues> = data => {
        console.log(data)
    }

    return (
        <Background>
            <Logo />

            <Header>Welcome back.</Header>
            <Controller
                defaultValue=''
                name='username'
                control={control}
                rules={{
                    required: {value: true, message: 'Username is required'}
                }}
                render={({onChange, value}) => (
                    <TextInput
                        label="Username"
                        returnKeyType="next"
                        value={value}
                        onChangeText={text => onChange(text)}
                        error={errors.username ? true : false}
                        errorText={errors?.username?.message}
                        autoCapitalize="none"
                    />
                )}
            />

            <Controller
                defaultValue=''
                name='password'
                control={control}
                rules={{
                    required: {value: true, message: 'Password is required'}
                }}
                render={({onChange, value}) => (
                    <TextInput
                        label="Password"
                        returnKeyType="next"
                        value={value}
                        onChangeText={text => onChange(text)}
                        error={errors.password ? true : false}
                        errorText={errors?.password?.message}
                        secureTextEntry
                    />

                )}
            />

            <Controller
                defaultValue=''
                name='repassword'
                control={control}
                rules={{
                    required: {value: true, message: 'Confirm password'}
                }}
                render={({onChange, value}) => (
                    <TextInput
                        label="RePassword"
                        returnKeyType="done"
                        value={value}
                        onChangeText={text => onChange(text)}
                        error={errors.repassword ? true : false}
                        errorText={errors?.repassword?.message}
                        secureTextEntry
                    />

                )}
            />

            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
                Signup
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

export default memo(Signup);