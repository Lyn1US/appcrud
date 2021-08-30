import React, {useState, useEffect} from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, ScrollView, Alert} from 'react-native';
import Style from './style';
import database from '../firebase';
import App, {screen} from '../App';
import { Ionicons } from '@expo/vector-icons';

function CadScreen({screenHook}){

  const [user, setUser] = useState([]);
  
  const [newName, setNewName]           = useState('');
  const [newPassword, setNewPassoword]   = useState('');
  const [newUsername, setNewUsername]      = useState('');

  useEffect(()=>{

    database.collection("users").onSnapshot((query)=>{
      const list = [];

      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id});
      })
      setUser(list);
    })
    
  },[])


  function addUser(name,password,username){

    database.collection("users").add({name: name, password: password, username: username})
    alert('Usuários cadastrados com sucesso');
    
    return;

  }

  return (
    <View style={Style.parentView}>
    
      <View style={Style.cadHeader}>
        <Text style={Style.cadHeaderTxt}>tela de cadastro</Text>
      
        <TouchableOpacity onPress={()=> screenHook('home')} style={Style.btnLogout}>
          <Ionicons  style={Style.logoutIcon} size={25} name="log-out-outline"/>
        </TouchableOpacity>
      </View>

      <View style={Style.backgroundView}>

        <Text style={Style.label}>cadastro de usuários</Text>

        <TextInput onChangeText={(text)=>setNewName(text)} placeholderTextColor="#A864A8" placeholder="Insira seu nome" style={Style.inputs}/>
        <TextInput onChangeText={(text)=>setNewUsername(text)} placeholderTextColor="#A864A8" placeholder="Insira seu nome de usuário" style={Style.inputs}/>
        <TextInput secureTextEntry={true} onChangeText={(text)=>setNewPassoword(text)} placeholderTextColor="#A864A8" placeholder="Insira sua senha" style={Style.inputs}/>
      
        <TouchableOpacity onPress={()=> addUser(newName,newPassword,newUsername) }style={Style.loginBtn}>
          <Text style={Style.loginBtnTxt}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>screenHook('view')} style={Style.btnNavigate}>
          <Text style={Style.btnNavigateTxt}>Visualizar usuários</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}
export default CadScreen;