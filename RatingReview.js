import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';

const RatingReview = ({ navigation, route }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Get repairer info from route params if available
  const repairerName = route?.params?.repairerName || 'repairer';
  const serviceType = route?.params?.serviceType || '';

  const handleStarPress = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      // Here you can send data to your backend
      console.log('Rating:', rating);
      console.log('Review:', review);
      console.log('Repairer:', repairerName);
    }
  };

  const handleSkip = () => {
    // Navigate back to home or activity screen
    navigation.navigate('Home');
  };

  const handleBackToHome = () => {
    // Navigate to home screen
    navigation.navigate('Home');
  };

  // Thank You Screen
  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={styles.topColorSection} />
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.successIcon}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
            
            <Text style={styles.title}>Thank you for your feedback!</Text>
            <Text style={styles.subtitle}>
              Your rating has been submitted successfully. We appreciate you helping us improve our services!
            </Text>
            
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleBackToHome}
            >
              <Text style={styles.submitButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Rating Screen
  return (
    <View style={styles.container}>
      <View style={styles.topColorSection} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.successIcon}>
              <Text style={styles.checkmark}>✓</Text>
            </View>
            
            <Text style={styles.title}>Service Completed!</Text>
            <Text style={styles.subtitle}>We'd love to hear your feedback</Text>
            
            <View style={styles.ratingSection}>
              <Text style={styles.ratingLabel}>Rate your repairer</Text>
              
              <View style={styles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => handleStarPress(star)}
                    style={styles.starButton}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.star,
                      rating >= star && styles.starFilled
                    ]}>
                      ★
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            
            {rating > 0 && (
              <View style={styles.reviewSection}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Leave a review (optional)"
                  placeholderTextColor="#000000ff"
                  multiline
                  numberOfLines={4}
                  value={review}
                  onChangeText={setReview}
                  textAlignVertical="top"
                />
                {review.length > 0 && (
                  <Text style={styles.reviewPreview}>
                    The technician was very kind! He did a great job. Will definitely call again.
                  </Text>
                )}
              </View>
            )}
            
            <TouchableOpacity
              style={[
                styles.submitButton,
                rating === 0 && styles.submitButtonDisabled
              ]}
              onPress={handleSubmit}
              disabled={rating === 0}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.submitButtonText,
                rating === 0 && styles.submitButtonTextDisabled
              ]}>
                Submit Rating
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkip}
              activeOpacity={0.7}
            >
              <Text style={styles.skipButtonText}>Skip for now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  topColorSection: {
    backgroundColor: '#137594',
    height: 140,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    marginTop: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 1,
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 34,
  },
  checkmark: {
    fontSize: 75,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#137594',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Inter-Bold',
  },
  subtitle: {
    fontSize: 15,
    color: '#000000ff',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Inter',
    lineHeight: 22,
  },
  ratingSection: {
    marginBottom: 24,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#137594',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Inter-SemiBold',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  starButton: {
    padding: 4,
  },
  star: {
    fontSize: 44,
    color: '#D1D5DB',
  },
  starFilled: {
    color: '#FDB913',
  },
  reviewSection: {
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#01040aff',
    borderRadius: 10,
    padding: 16,
    fontSize: 14,
    minHeight: 20,
    color: '#137594',
    fontFamily: 'Inter',
    backgroundColor: '#F9FAFB',
  },
  reviewPreview: {
    fontSize: 13,
    color: '#137594',
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
    fontFamily: 'Inter',
  },
  submitButton: {
    backgroundColor: '#137594',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#137594',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonDisabled: {
    backgroundColor: '#137594',
    shadowOpacity: 0,
  },
  submitButtonText: {
    color: '#ffffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  submitButtonTextDisabled: {
    color: '#ffffffff',
  },
  skipButton: {
    paddingVertical: 16,
  },
  skipButtonText: {
    color: '#5d5e5fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
});

export default RatingReview;