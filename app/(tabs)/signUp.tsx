import { router } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Main Content Section - Centered */}
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/PATHMATE.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.taglineText}>Right Person, Right Place, Right Now</Text>

        <TextInput 
          placeholder="Full Name" 
          style={styles.textInput} 
          placeholderTextColor="gray"
        />
        
        <TextInput 
          placeholder="Phone Number" 
          style={styles.textInput} 
          placeholderTextColor="gray"
        />

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.push('/bioInfo')}
        >
          <Text style={styles.loginButtonText}>SignUp</Text>
        </TouchableOpacity>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            By pressing continue, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2efe8',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2efe8',
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 210,
    height: 300,
    marginTop: -50
  },
  taglineText: {
    fontSize: 15,
    color: '#56382d',
    marginTop: -50,
    marginBottom: 100,
    fontFamily: 'Lato',
    fontWeight: '500',
  },
  textInput: {
    width: '100%',
    height: 45,
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontFamily: 'Lato',
    backgroundColor: 'white',
  },
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#56382d',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Lato',
  },
  bottomTextContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: 60,
  },
  bottomText: {
    color: '#56382d',
    fontFamily: 'Lato',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 12,
  },
});


