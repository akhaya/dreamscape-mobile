import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import { loginStyles } from '../../assets/styles';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
        <View style={loginStyles.logoContainer}>
            <Image
            source={require('../../assets/logo.jpg')}
            style={{height:100, width: 300, marginBottom: 10}}
            />
            <Text style={loginStyles.title}>An app made for fellow dreamers to track their dreams</Text>
        </View>
        <View style={loginStyles.formContainer}>
        <LoginForm />
        </View>
      </KeyboardAvoidingView>
            );
        }
    }