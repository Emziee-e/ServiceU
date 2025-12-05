import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
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
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    );
  }

  // Rating Screen
  return (
    <SafeAreaView style={styles.container}>
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
                  placeholderTextColor="#9CA3AF"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#137594',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#ffffffff',
    borderRadius: 20,
    padding: 32,
    shadowColor: '#fffcfcff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  checkmark: {
    fontSize: 48,
    color: '#ffffffff',
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
    color: '#505153ff',
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
    color: '#173d49ff',
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
    color: '#a2a2a2ff',
  },
  starFilled: {
    color: '#FDB913',
  },
  reviewSection: {
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    minHeight: 100,
    color: '#000000ff',
    fontFamily: 'Inter',
    backgroundColor: '#cdcecfff',
  },
  reviewPreview: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
    fontFamily: 'Inter',
  },
  submitButton: {
    backgroundColor: '#173d49ff',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#FDB913',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonDisabled: {
    backgroundColor: '#E5E7EB',
    shadowOpacity: 0,
  },
  submitButtonText: {
    color: '#f2f2f2ff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  submitButtonTextDisabled: {
    color: '#fafbfeff',
  },
  skipButton: {
    paddingVertical: 16,
  },
  skipButtonText: {
    color: '#898989ff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
  },
});

export default RatingReview;