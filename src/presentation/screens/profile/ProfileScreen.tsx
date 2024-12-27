import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const name = useProfileStore( state => state.name );
  const email = useProfileStore( state => state.email );
  const changeProfile = useProfileStore( state => state.changeProfile );

  return (
    <View style={styles.container}>
      <Text style = {styles.title }>{ name }</Text>
      <Text style = {styles.title }>{ email }</Text>

      {/* BOTON PARA CAMBIAR EL NAME */}
      <Pressable 
        onPress={ () => useProfileStore.setState({ name: 'Ramón Sánchez'})}
        style ={ styles.primarybutton }>
        <Text>Cambiar Nombre</Text>
      </Pressable>
      {/* BOTON PARA CAMBIAR EL EMAIL */}
      <Pressable
        onPress={ () => useProfileStore.setState({ email: 'rsan@google.com'})}
        style ={ styles.primarybutton }>
        <Text>Cambiar Email</Text>
      </Pressable>

      {/* BOTON PARA DISPARAR EL CHANGE */}
      <Pressable
        onPress={ () => changeProfile( 'john Doe', 'john.doe@google.com')}
        style ={ styles.primarybutton }>
        <Text>Regresar a John Doe</Text>
      </Pressable>

    </View>
  );
};
