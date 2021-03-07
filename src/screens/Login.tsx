import React, {memo, useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Header, Button, TextInput, Background, Logo} from '../components'
import {theme} from '../core/theme';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {useOvermind} from '../overmind';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParams, LoginFormValues} from '../types';

type NavProps = StackNavigationProp<AuthStackParams, 'Login'>;
type Props = {
    navigation: NavProps;
}
function Login({navigation}: Props) {
    const {useLogin} = useOvermind().actions.app;
    const {handleSubmit, control, errors} = useForm<LoginFormValues>();

    const onSubmit: SubmitHandler<LoginFormValues> = data => {
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
                        keyboardType='default'
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
                        keyboardType='default'
                        returnKeyType="done"
                        value={value}
                        onChangeText={text => onChange(text)}
                        error={errors.password ? true : false}
                        errorText={errors?.password?.message}
                        secureTextEntry
                    />

                )}
            />

            <Button mode="contained" onPress={handleSubmit(onSubmit)}>
                Login
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.link}>Sign up</Text>
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

export default memo(Login);
