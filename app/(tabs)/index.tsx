import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Main Content Section - Centered */}
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/icon.png')} 
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

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTextContainer}>
          <Text style={styles.bottomTextLink}>
            Don't have an account? Sign up!
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede4d4',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ede4d4',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoImage: {
    width: 250,
    height: 250,
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
    fontSize: 14,
    color: '#56382d',
    fontFamily: 'Lato',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  bottomTextLink: {
    color: '#56382d',
    fontFamily: 'Lato',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});


