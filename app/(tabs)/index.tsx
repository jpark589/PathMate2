import { Image, StyleSheet, Text, View } from 'react-native';

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
        
        <Text style={styles.subtitle}>Sign in to continue</Text>
        
        <View style={styles.loginSection}>
          <Text style={styles.bottomText}>Login Form Goes Here</Text>
          <Text style={styles.bottomSubtext}>Input fields and buttons will be added here</Text>
        </View>
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
  loginSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 250,
    height: 250,
  },
  fallbackText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  logoLine1: {
    fontSize: 36,
    fontWeight: '900',
    color: '#333',
    letterSpacing: 3,
  },
  logoLine2: {
    fontSize: 36,
    fontWeight: '900',
    color: '#333',
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  bottomSubtext: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});


