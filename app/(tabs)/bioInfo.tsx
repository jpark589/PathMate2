import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function BioInfoScreen() {
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [selectedEthnicities, setSelectedEthnicities] = useState<string[]>([]);

  const toggleEthnicity = (ethnicity: string) => {
    if (selectedEthnicities.includes(ethnicity)) {
      setSelectedEthnicities(selectedEthnicities.filter(e => e !== ethnicity));
    } else {
      setSelectedEthnicities([...selectedEthnicities, ethnicity]);
    }
  };

  const ethnicities = ['Asian', 'White', 'Black', 'Middle Eastern', 'Hispanic'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/PATHMATE.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.titleText}>Getting to Know You</Text>

        {/* Date of Birth Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Date of Birth</Text>
          <TextInput 
            placeholder="MM/DD/YY" 
            style={styles.textInput} 
            placeholderTextColor="#999"
          />
        </View>

        {/* Height Input */}
        <View style={styles.inputContainer}>
          <View style={styles.heightHeader}>
            <Text style={styles.labelText}>Height</Text>
            <View style={styles.unitToggle}>
              <TouchableOpacity 
                style={[styles.unitButton, heightUnit === 'ft' && styles.unitButtonInactive]}
                onPress={() => setHeightUnit('ft')}
              >
                <Text style={[styles.unitButtonText, heightUnit === 'ft' && styles.unitButtonTextInactive]}>
                  FT/IN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.unitButton, heightUnit === 'cm' && styles.unitButtonActive]}
                onPress={() => setHeightUnit('cm')}
              >
                <Text style={[styles.unitButtonText, heightUnit === 'cm' && styles.unitButtonTextActive]}>
                  CM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput 
            placeholder="180" 
            style={styles.textInput} 
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Race/Ethnicity Selection */}
        <View style={styles.ethnicityContainer}>
          <Text style={styles.labelText}>Select all that applies:</Text>
          <View style={styles.ethnicityGrid}>
            {ethnicities.map((ethnicity) => (
              <TouchableOpacity
                key={ethnicity}
                style={[
                  styles.ethnicityButton,
                  selectedEthnicities.includes(ethnicity) && styles.ethnicityButtonSelected
                ]}
                onPress={() => toggleEthnicity(ethnicity)}
              >
                <Text style={styles.checkmark}>
                  {selectedEthnicities.includes(ethnicity) ? '✓ ' : ''}
                </Text>
                <Text style={styles.ethnicityButtonText}>{ethnicity}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2efe8',
  },
  mainContent: {
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Lato',
  },
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Lato',
  },
  textInput: {
    width: '100%',
    height: 60,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 12,
    fontFamily: 'Lato',
    backgroundColor: 'white',
    fontSize: 24,
    color: '#999',
  },
  heightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  unitToggle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
  unitButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  unitButtonInactive: {
    backgroundColor: 'white',
  },
  unitButtonActive: {
    backgroundColor: '#56382d',
  },
  unitButtonText: {
    fontFamily: 'Lato',
    fontSize: 14,
    color: '#666',
  },
  unitButtonTextInactive: {
    color: '#666',
  },
  unitButtonTextActive: {
    color: 'white',
  },
  ethnicityContainer: {
    marginBottom: 30,
  },
  ethnicityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  ethnicityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#56382d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  ethnicityButtonSelected: {
    backgroundColor: '#56382d',
  },
  ethnicityButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#56382d',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Lato',
  },
});

