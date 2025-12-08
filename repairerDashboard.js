import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RepairerDashboard = ({navigation}) => {
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const [basePrice, setBasePrice] = useState('500.00');
  const [minPrice, setMinPrice] = useState('200');
  const [maxPrice, setMaxPrice] = useState('800');
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <View style={styles.container}>
      {/* ScrollView for the main content */}
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image source={require('./assets/luis.jpg')} style={styles.profileImage} />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>Luis</Text>
          </View>
        </View>

        {/* My Jobs Section */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>My Jobs</Text>

          {/* Job Status Cards Row */}
          <View style={styles.jobsRow}>
            <View style={styles.jobCard}>
              <Text style={[styles.jobNumber, { color: '#FFA500' }]}>3</Text>
              <Text style={styles.jobLabel}>Pending</Text>
            </View>
            <View style={styles.jobCard}>
              <Text style={[styles.jobNumber, { color: '#137594' }]}>1</Text>
              <Text style={styles.jobLabel}>Ongoing</Text>
            </View>
            <View style={styles.jobCard}>
              <Text style={[styles.jobNumber, { color: '#00C48C' }]}>12</Text>
              <Text style={styles.jobLabel}>Completed</Text>
            </View>
          </View>

          {/* Price and Rating Row */}
          <View style={styles.priceRatingRow}>
            <TouchableOpacity 
              style={styles.priceCard} 
              activeOpacity={0.7}
              onPress={() => setIsPriceModalVisible(true)}
            >
              <Image source={require('./assets/tag.png')} style={styles.tagIcon} />
              <Text style={styles.priceText}>Set Your Price</Text>
            </TouchableOpacity>
            
            {/* Rating Card - Now clickable */}
            <TouchableOpacity 
              style={styles.ratingCard}
              activeOpacity={0.7}
              onPress={() => setIsFeedbackVisible(true)}
            >
              <Text style={styles.ratingLabel}>Your Rating</Text>
              <View style={styles.whiteLine} />
              <View style={styles.ratingValue}>
                <Text style={styles.ratingNumber}>4.0/5 </Text>
                <Image source={require('./assets/star.png')} style={styles.starIcon} />
              </View>
            </TouchableOpacity>
          </View>

          {/* New Booking Request Section */}
          <View style={styles.bookingHeader}>
            <Text style={styles.sectionTitle}>New Booking Request</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Booking Request Cards */}
          <TouchableOpacity style={styles.bookingCard} activeOpacity={0.7}>
            <Image source={require('./assets/chip.png')} style={styles.chipIcon} />
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>Replace Component</Text>
              <Text style={styles.bookingName}>Tristan Mirano</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookingCard} activeOpacity={0.7}>
            <Image source={require('./assets/chip.png')} style={styles.chipIcon} />
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>Device Repair</Text>
              <Text style={styles.bookingName}>Brent Pagcaliwagan</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookingCard} activeOpacity={0.7}>
            <Image source={require('./assets/chip.png')} style={styles.chipIcon} />
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingTitle}>Hardware Restoration</Text>
              <Text style={styles.bookingName}>Kenn Philip Silang</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/home.png')} style={styles.navIcon} />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}
          onPress={() => navigation.navigate("manageBookings")}
        >
          <Image source={require('./assets/jobs.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/earnings.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Earnings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <Image source={require('./assets/settings.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Price Setting Modal */}
      {isPriceModalVisible && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setIsPriceModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            {/* Base Service Fee */}
            <Text style={styles.modalLabel}>Base Service Fee (PHP)</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputBaseFee}>{basePrice}</Text>
            </View>
            <Text style={styles.helperText}>This fee applies to your services</Text>

            {/* Estimation Fee Range */}
            <Text style={styles.modalLabel}>Estimation Fee Range (PHP)</Text>
            <View style={styles.rangeContainer}>
              <View style={styles.rangeInput}>
                <Text style={styles.inputText}>{minPrice}</Text>
              </View>
              <Text style={styles.rangeSeparator}>—</Text>
              <View style={styles.rangeInput}>
                <Text style={styles.inputText}>{maxPrice}</Text>
              </View>
            </View>

            {/* Set Button */}
            <TouchableOpacity 
              style={styles.setButton}
              onPress={() => setIsPriceModalVisible(false)}
            >
              <Text style={styles.setButtonText}>Set</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Customer Feedback Modal */}
      {isFeedbackVisible && (
        <View style={styles.feedbackModalOverlay}>
          <View style={styles.feedbackModal}>
            {/* Header */}
            <View style={styles.feedbackHeader}>
              <TouchableOpacity 
                onPress={() => setIsFeedbackVisible(false)}
                style={styles.backButton}
              >
                <Text style={styles.backArrow}>←</Text>
              </TouchableOpacity>
              <View style={styles.feedbackTitleContainer}>
                <Text style={styles.feedbackTitle}>Customer Feedback</Text>
              </View>
            </View>

            <ScrollView style={styles.feedbackScroll}>
              {/* Overall Rating Section */}
              <View style={styles.overallRatingCard}>
                <Text style={styles.overallRatingLabel}>Overall Rating</Text>
                <View style={styles.overallRatingRow}>
                  <Text style={styles.overallRatingNumber}>4.0</Text>
                  <Text style={styles.overallRatingStar}>⭐</Text>
                </View>
                <Text style={styles.reviewCount}>Based on 1 review/s</Text>

                {/* Rating Breakdown */}
                <View style={styles.ratingBreakdown}>
                  {[5, 4, 3, 2, 1].map((star) => (
                    <View key={star} style={styles.ratingRow}>
                      <Text style={styles.starLabel}>{star} ⭐</Text>
                      <View style={styles.ratingBarContainer}>
                        <View 
                          style={[
                            styles.ratingBar, 
                            { width: star === 4 ? '100%' : '0%' }
                          ]} 
                        />
                      </View>
                      <Text style={styles.ratingPercentage}>
                        {star === 4 ? '100%' : '0%'}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Filter Buttons */}
              <View style={styles.filterContainer}>
                <View style={styles.filterButtons}>
                  <TouchableOpacity 
                    style={[
                      styles.filterButton,
                      styles.sortButton
                    ]}
                  >
                    <Text style={styles.sortButtonText}>Sort by: Newest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[
                      styles.filterButton,
                      selectedFilter === 'All' && styles.filterButtonActive
                    ]}
                    onPress={() => setSelectedFilter('All')}
                  >
                    <Text style={[
                      styles.filterButtonText,
            
                    ]}>All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[
                      styles.filterButton,
                    ]}
                  >
                    <Text style={[styles.fiveRating
                    ]}>5 ★</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Review Card */}
              <View style={styles.reviewCard}>
                <View style={styles.reviewStars}>
                  <Text style={styles.reviewStar}>⭐</Text>
                  <Text style={styles.reviewStar}>⭐</Text>
                  <Text style={styles.reviewStar}>⭐</Text>
                  <Text style={styles.reviewStar}>⭐</Text>
                </View>
                <Text style={styles.reviewText}>
                  The technician was very kind! He did a great job. Will definitely call again.
                </Text>
                <View style={styles.whiteLine} />
                <Text style={styles.reviewService}>Service: Component Replacement</Text>
                <Text style={styles.reviewDate}>November 07, 2025</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#137594',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 50,
    paddingBottom: 17,
    paddingHorizontal: 20, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 30,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    marginLeft: 10,
    marginTop: 30,
  },
  welcomeText: {
    color: '#fff',
    fontFamily: 'Inter',
    fontSize: 19,
    fontWeight: '600',
  },
  nameText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  jobsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, 
    marginBottom: 20,
  },
  jobCard: {
    backgroundColor: '#eaf3f5',
    borderRadius: 12,
    padding: 20,
    flex: 1,
    alignItems: 'center', 
  },
  jobNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobLabel: {
    fontSize: 14,
    color: '#50595b',
  },
  priceRatingRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  priceCard: {
    backgroundColor: '#eaf3f5',
    borderRadius: 12,
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#50595b',
  },
  ratingCard: {
    backgroundColor: '#eaf3f5',
    borderRadius: 12,
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingLabel: {
    fontSize: 13,
    color: '#50595b',
  },
  ratingValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 7,
  },
  ratingNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  starIcon: {
    width: 24,
    height: 24,
    marginLeft: -5,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  viewAllText: {
    color: '#137594',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  bookingCard: {
    backgroundColor: '#eaf3f5',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
   marginBottom: 10,
 
  },
  chipIcon: {
    width: 45,
    height: 45,
    marginRight: 15,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 1,
  },
  bookingName: {
    fontSize: 15,
    color: '#50595b',
  },
  chevron: {
    fontSize: 50,
    color: '#137594',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 35,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 28,
    height: 28,
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#999',
  },
  navTextActive: {
    fontSize: 12,
    color: '#137594',
    fontWeight: '600',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 400,
  },
  closeButton: {
    position: 'absolute',
    top: 13,
    right: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 23,
    color: '#000000',
    fontWeight: 'bold',
  },
  modalLabel: {
    fontSize: 14,
    color: '#50595b',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#000000ff',
    borderRadius: 13,
    height: 50,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginBottom: 8,
  },
  inputBaseFee: {
    fontWeight: '600',
    fontSize: 18,
  },
  inputText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center'
  },
  helperText: {
    fontSize: 13,
    color: '#50595b',
    marginBottom: 20,
  },
  rangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  rangeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000ff',
    height: 50,
    borderRadius: 13,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rangeSeparator: {
    fontSize: 30,
    color: '#000000ff',
    marginHorizontal: 15,
  },
  setButton: {
    backgroundColor: '#137594',
    borderRadius: 17,
    width: 100,
    height: 43,
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center'
    
  },
  setButtonText: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  feedbackModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
  },
  feedbackModal: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feedbackHeader: {
    backgroundColor: '#137594',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
    marginTop: -14,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  feedbackScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  overallRatingCard: {
    backgroundColor: '#eaf3f5',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  overallRatingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  overallRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  overallRatingNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000ff',
    marginRight: 8,
  },
  overallRatingStar: {
    fontSize: 28,
  },
  reviewCount: {
    fontSize: 12,
    color: '#50595b',
    marginBottom: 20,
  },
  ratingBreakdown: {
    marginTop: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  starLabel: {
    width: 50,
    fontSize: 12,
    color: '#50595b',
  },
  ratingBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  ratingBar: {
    height: '100%',
    backgroundColor: '#137594',
    borderRadius: 4,
  },
  ratingPercentage: {
    width: 40,
    fontSize: 12,
    color: '#50595b',
    textAlign: 'right',
  },
  filterContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  sortButton: {
    backgroundColor: '#e9e9ea',
    borderColor: '#e9e9ea',
  },
  sortButtonText: {
    fontSize: 14,
    color: '#50595b',
    fontWeight: '500',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fafafa',
    backgroundColor: '#e9e9ea',
  },
  filterButtonActive: {
    backgroundColor: '#137594',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#ffffffff',
    fontWeight: '500',
  },
  reviewCard: {
    backgroundColor: '#eaf3f5',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 16,
    borderRadius: 12,
  },
  reviewStars: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  reviewStar: {
    fontSize: 18,
    marginRight: 2,
  },

  fiveRating: {
    color: '#50595b',
  },
  reviewText: {
    fontSize: 14,
    color: '#50595b',
    marginBottom: 12,
    lineHeight: 20,
  },
  reviewService: {
    fontSize: 12,
    color: '#50595b',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: '#50595b',
    fontStyle: 'italic',
  },
  whiteLine: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
});

export default RepairerDashboard;