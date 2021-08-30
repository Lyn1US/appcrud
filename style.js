import React from 'react';
import {StyleSheet} from 'react-native';
import constants from 'expo-constants';

/*
#F6E5FC - plano de fundo
#D47ED8 - cor botao
#F6E5FC - texto botao
#E6CCE7- input color
#A864A8 - borda e texto
#F3DBFB  - texto tabs
#832389 - cor tabs

#E6CCE7 - view com botoes de usuarios
#F6E5FC - contorno do btn usuario
#BD8CBF - cor do btn usuario
#662D91 - btn deletar
*/ 

export default StyleSheet.create({

    // HOME

    parentView:{
        height: '100%', 
        width: '100%'
    },

    header:{
        marginTop: constants.statusBarHeight,
    },

    backgroundView:{
        width: '100%',
        height: '100%',
        backgroundColor: '#F6E5FC',
        alignItems: 'center',
    },
    imgStyle:{
        width: '40%', 
        height: '25%',
        alignSelf: 'center',
        marginTop: '30%'
    },

    inputs:{
        marginTop: '5%',
        width: '75%',
        height: 55,
        backgroundColor: '#E6CCE7',
        alignSelf: 'center',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#A864A8',
        color: '#A864A8',
        textAlign: 'center',
        fontSize: 18,
    },

    loginBtn:{
        marginTop: '10%',
        width: '75%',
        height: 55,
        backgroundColor: '#D47ED8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

    loginBtnTxt:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        textTransform: 'capitalize',
    },

    // TELA DE CADASTRO

    cadHeader:{
        marginTop: constants.statusBarHeight,
        height: '8%',
        width: '100%',
        backgroundColor: '#832389',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cadHeaderTxt:{
        flex: 1,
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        
    },
    btnLogout:{
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginRight: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutIcon:{
        alignSelf:'center',
        color: 'white',
    },
    label:{
        marginTop: '30%',
        color: '#A864A8',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: 25,
    },
    btnNavigate:{
        marginTop: '15%',
        width: '75%',
        height: '8%',
        backgroundColor: '#832389',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNavigateTxt:{
        color: 'white',
        fontSize: 18,   
        textAlign: 'center',
        fontWeight: '400',
    },

    // TELA DE VISUALIZAÇÃO

    viewHeader:{
        marginTop: constants.statusBarHeight,
        height: '8%',
        width: '100%',
        backgroundColor: '#832389',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    viewHeaderTxt:{
        flex: 1,
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        alignSelf: 'center',
        
    },

    btnNavigateView:{
        marginTop: '5%',
        width: '75%',
        height: '8%',
        backgroundColor: '#832389',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollViewContainer:{
        marginTop: '7%',
        width: '100%',
        height: '70%',
       
    },

    scrollView:{
        width: '90%',
        height: '70%',
        backgroundColor: '#E6CCE7',
        alignSelf: 'center',
        borderRadius: 20,
        
    },

    scrollViewCell:{
        marginTop: 20,
        width: '80%',
        height: 85,
        backgroundColor: '#BD8CBF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 25,
    },

    scrollViewCellTxt:{
        color: 'white',
        fontWeight: '400',
        fontSize: 15,
    },

    // MODAL DE EDIÇÃO


    userInfo:{
        marginTop: '4%',
        width: '90%',
        height: '20%',
        backgroundColor: '#BD8CBF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelModalInfo:{
        textAlign: 'center',
        textTransform: 'capitalize',
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
    },

    modalInfoView:{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalInfoViewTxt:{
        marginTop: '5%',
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },

    deleteBtn:{
        marginTop: '10%',
        width: '75%',
        height: 55,
        backgroundColor: '#662D91',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

   
})