import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RepairerCard = ({ repairer, onExpand, expanded, onApprove, onReject }) => (
  <View style={styles.repairerCard}>
    <TouchableOpacity 
      style={styles.repairerHeader}
      onPress={onExpand}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{repairer.initials}</Text>
      </View>
      <View style={styles.repairerInfo}>
        <Text style={styles.repairerName}>{repairer.name}</Text>
        <Text style={styles.repairerEmail}>{repairer.email}</Text>
        <Text style={styles.repairerDate}>Submitted: {repairer.submittedDate}</Text>
      </View>
      <Text style={styles.expandIcon}>{expanded ? '︿' : '﹀'}</Text>
    </TouchableOpacity>

    {expanded && (
      <View style={styles.documentsSection}>
        <Text style={styles.documentsTitle}>Submitted Documents</Text>
        
        {repairer.documents.map((doc, index) => (
          <View key={index} style={styles.documentRow}>
            <Image 
              source={doc.type === 'pdf' 
                ? require('./assets/certification.png') 
                : require('./assets/license.png')
              } 
              style={styles.documentIcon}
            />
            <Text style={styles.documentName}>{doc.name}</Text>
            <TouchableOpacity>
              <Text style={styles.viewLink}>View</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.rejectButton} onPress={onReject}>
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.approveButton} onPress={onApprove}>
            <Text style={styles.approveButtonText}>Approve</Text>
          </TouchableOpacity>
        </View>
      </View>
    )}
  </View>
);

export default function verifyRepairer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedRepairer, setSelectedRepairer] = useState(null);
  const [repairers, setRepairers] = useState([
    {
      id: '1',
      name: 'Luis Fernando',
      initials: 'LF',
      email: 'luis.fernando@gmail.com',
      submittedDate: '27/11/2025',
      documents: [
        { name: 'certification.pdf', type: 'pdf' },
        { name: 'license.jpg', type: 'image' },
      ],
    },
    {
      id: '2',
      name: 'Brent Pagcaliwagan',
      initials: 'BP',
      email: 'brent.pagcaliwagan@hotmail.com',
      submittedDate: '27/11/2025',
      documents: [
        { name: 'certification.pdf', type: 'pdf' },
        { name: 'license.jpg', type: 'image' },
      ],
    },
    {
      id: '3',
      name: 'JM Policarpio',
      initials: 'JP',
      email: 'jmpolicarpio@yahoo.com',
      submittedDate: '27/11/2025',
      documents: [
        { name: 'certification.pdf', type: 'pdf' },
        { name: 'license.jpg', type: 'image' },
      ],
    },
  ]);

  const handleBack = () => {
    console.log('Go back');
    // Navigate back
  };

  const handleExpand = (repairerId) => {
    setExpandedId(expandedId === repairerId ? null : repairerId);
  };

  const handleApproveClick = (repairer) => {
    setSelectedRepairer(repairer);
    setShowApproveModal(true);
  };

  const handleConfirmApprove = () => {
    setShowApproveModal(false);
    // Remove approved repairer from list
    setRepairers(repairers.filter(r => r.id !== selectedRepairer.id));
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    setSelectedRepairer(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0891b2" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="chevron-back" size={28} color="#173d49ff" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Pending</Text>
            <Text style={styles.headerTitle}>Verifications</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Image source={require('./assets/search.png')} />
          </View>
        </View>
      </View>

      {/* Repairers List */}
      <ScrollView 
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {repairers.map((repairer) => (
          <RepairerCard
            key={repairer.id}
            repairer={repairer}
            expanded={expandedId === repairer.id}
            onExpand={() => handleExpand(repairer.id)}
            onApprove={() => handleApproveClick(repairer)}
          />
        ))}
      </ScrollView>

      {/* Approve Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showApproveModal}
        onRequestClose={() => setShowApproveModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Approve Repairer?</Text>
            <Text style={styles.modalDescription}>
              This will make the repairer's profile active and visible to the customers. They will be able to receive booking requests.
            </Text>

            <Text style={styles.modalSubtitle}>Repairer Details:</Text>

            {selectedRepairer && (
              <View style={styles.repairerPreview}>
                <View style={styles.previewAvatar}>
                  <Text style={styles.previewAvatarText}>{selectedRepairer.initials}</Text>
                </View>
                <View style={styles.previewInfo}>
                  <Text style={styles.previewName}>{selectedRepairer.name}</Text>
                  <Text style={styles.previewEmail}>{selectedRepairer.email}</Text>
                  <Text style={styles.previewDate}>Submitted: {selectedRepairer.submittedDate}</Text>
                </View>
              </View>
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowApproveModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmApproveButton}
                onPress={handleConfirmApprove}
              >
                <Text style={styles.confirmApproveButtonText}>Approve</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay1}>
          <View style={styles.modalContent1}>
            <View style={styles.successIcon}>
              <Text style={styles.successCheckmark}>✓</Text>
            </View>

            <Text style={styles.successTitle}>Repairer Approved!</Text>
            <Text style={styles.successDescription}>
              You have successfully approved a repairer.
            </Text>

            <Text style={styles.modalSubtitle}>Repairer Details:</Text>

            {selectedRepairer && (
              <View style={styles.repairerPreview}>
                <View style={styles.previewAvatar}>
                  <Text style={styles.previewAvatarText}>{selectedRepairer.initials}</Text>
                </View>
                <View style={styles.previewInfo}>
                  <Text style={styles.previewName}>{selectedRepairer.name}</Text>
                  <Text style={styles.previewEmail}>{selectedRepairer.email}</Text>
                  <Text style={styles.previewDate}>Submitted: {selectedRepairer.submittedDate}</Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#0891b2',
    paddingVertical: 16,
     paddingLeft: 15,
    paddingTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backArrow: {
    fontSize: 20,
    color: '#0891b2',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    width: 120,
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  searchIcon: {
    fontSize: 16,
    marginLeft: 4,
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: '#0891b2',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  repairerCard: {
    backgroundColor: '#e0f2f1',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 0.1,
  },
  repairerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#5da5b8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  repairerInfo: {
    flex: 1,
  },
  repairerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  repairerEmail: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 2,
  },
  repairerDate: {
    fontSize: 11,
    color: '#94a3b8',
  },
  expandIcon: {
    fontSize: 16,
    color: '#0891b2',
    fontWeight: 'bold',
  },
  documentsSection: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    padding: 16,
  },
  documentsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  documentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
  },
  documentIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  documentName: {
    flex: 1,
    fontSize: 14,
    color: '#64748b',
  },
  viewLink: {
    fontSize: 14,
    color: '#0891b2',
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  rejectButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  approveButton: {
    flex: 1,
    backgroundColor: '#0891b2',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  approveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: -20,
    paddingTop: 470,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 24,
    Width: 450,
    height: 400,
  },
  modalOverlay1: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: -20,
    paddingTop: 575,
  },
  modalContent1: {
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 25,
    width: 410,
    height: 570,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0891b2',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 20,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  repairerPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
  },
  previewAvatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#5da5b8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  previewAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  previewInfo: {
    flex: 1,
  },
  previewName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  previewEmail: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 2,
  },
  previewDate: {
    fontSize: 11,
    color: '#94a3b8',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
  confirmApproveButton: {
    flex: 1,
    backgroundColor: '#0891b2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmApproveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  successCheckmark: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0891b2',
    textAlign: 'center',
    marginBottom: 12,
  },
  successDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#0891b2',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});