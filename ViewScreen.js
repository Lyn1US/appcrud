import React, {useState, useEffect} from 'react';
import {View, Text, Touchable, TouchableOpacity, ScrollView, SafeAreaView, TextInput} from 'react-native';
import Style from './style';
import database from '../firebase';
import App, {screen} from '../App';
import { Ionicons } from '@expo/vector-icons';

function ViewScreen({screenHook}){

    const [user, setUser] = useState([]);

    const [modal, setModal] = useState(false);
    const [id, setId] = useState('');

    const [newName,setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
  useEffect(()=>{

    database.collection("users").onSnapshot((query)=>{
      const list = [];

      query.forEach((doc)=>{
        list.push({...doc.data(), id: doc.id});
      })
      setUser(list);
    })
    
  },[])

  function gotoEdit(id){
      
    setId(id);
    setModal(true);
  
  }

  function editUser(){
    database.collection("users").doc(id).update({name: newName, password: newPassword})
    alert('Dados alterados com sucesso, veja na página de visualização!')
    setModal(false);
}

  function deleteUser(){
    database.collection("users").doc(id).delete();
    alert('Dados excluídos com sucesso, veja na página de visualização!')
    setModal(false)
  }

    if(!modal){
        return(
            <View style={Style.parentView}>
    
                <View style={Style.viewHeader}>
                    <Text style={Style.viewHeaderTxt}>Tela de visualização</Text>
                    
                    <TouchableOpacity onPress={()=> screenHook('home')} style={Style.btnLogout}>
                        <Ionicons name="log-out-outline" size={25} style={Style.logoutIcon}/>
                    </TouchableOpacity>
                
                </View>
    
                <View style={Style.backgroundView}>
    
                   <View style={Style.scrollViewContainer}>
                       <ScrollView style={Style.scrollView}>
                        {
                            user.map((val)=>{
                                
                                return(
                                    <TouchableOpacity onPress={()=> gotoEdit(val.id)} key={val.id} style={Style.scrollViewCell}>
                                        <Text style={Style.scrollViewCellTxt}>{val["username"]}</Text>
                                        <Text style={Style.scrollViewCellTxt}>{val["name"]}</Text>
                                        <Text style={Style.scrollViewCellTxt}>{val["password"]}</Text>
                                    </TouchableOpacity>
                                )
                            
                            })
                        }
    
                       </ScrollView>
                   </View>
    
                   <TouchableOpacity onPress={()=>screenHook('cad')} style={Style.btnNavigateView}>
                        <Text style={Style.btnNavigateTxt}>Cadastrar usuários</Text>
                    </TouchableOpacity>
                   
                </View>
    
            </View>
        )
    }
    else{
        return(
            <View style={Style.parentView}>
                
                <View style={Style.viewHeader}>
                    <Text style={Style.viewHeaderTxt}> Tela de Edição</Text>
                </View>

                <View style={Style.backgroundView}>

                    <View style={Style.userInfo}>
                        {
                            user.map((val)=>{
                                
                                if(val.id == id){
                                    return(
                                       
                                        <View style={Style.modalInfoView} key={val.id}>
                                            <Text style={Style.labelModalInfo}> Dados atuais: </Text>
                                            
                                            <Text style={Style.modalInfoViewTxt}>{"Nome: " + val["name"]}</Text>
                                            <Text style={Style.modalInfoViewTxt}>{"Senha: " + val["password"]}</Text>
                                        </View>
                                    )
                                }  
                            })
                        }

                    </View>

                    <TextInput onChangeText={(text)=>setNewName(text)} placeholderTextColor="#A864A8" placeholder="Insira um novo nome" style={Style.inputs}/>
                    <TextInput onChangeText={(text)=>setNewPassword(text)} placeholderTextColor="#A864A8" placeholder="Insira uma nova senha" style={Style.inputs}/>

                    <TouchableOpacity onPress={()=> editUser()}style={Style.loginBtn}>
                        <Text style={Style.loginBtnTxt}>Alterar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> deleteUser()}style={Style.deleteBtn}>
                        <Text style={Style.loginBtnTxt}>Deletar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>setModal(false)} style={Style.btnNavigateView}>
                        <Text style={Style.btnNavigateTxt}>Cancelar</Text>
                    </TouchableOpacity>
                
                </View>

            </View>
        )
    }
}
export default ViewScreen;