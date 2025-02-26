import {
  View, Text, Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback, Pressable, Animated,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';
import { useState, useRef, useEffect } from 'react';

const { height } = Dimensions.get('window');

export default function HomeTab() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetAnimation = useRef(new Animated.Value(height)).current;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleBottomSheet = () => {
    if (bottomSheetVisible) {
      Animated.timing(bottomSheetAnimation, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setBottomSheetVisible(false);
      });
    } else {
      setBottomSheetVisible(true);
      Animated.timing(bottomSheetAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const bottomSheetModal = (
    <Modal
      animationType="none"
      transparent={true}
      visible={bottomSheetVisible}
      onRequestClose={toggleBottomSheet}
    >
      <TouchableWithoutFeedback onPress={toggleBottomSheet}>
        <View style={styles.bottomSheetOverlay}>
          <Animated.View
            style={[
              styles.bottomSheetContent,
              {
                transform: [{ translateY: bottomSheetAnimation }]
              }
            ]}
          >
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <View style={styles.bottomSheetInner}>
                <View style={styles.bottomSheetHeader}>
                  <View style={styles.bottomSheetHandle} />
                  <TouchableOpacity
                    style={styles.closeIconButton}
                    onPress={toggleBottomSheet}
                  >
                    <Text style={styles.closeIcon}>✕</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.bottomSheetTitle}>Share post</Text>

                <View style={styles.shareOptions}>
                  <View style={styles.shareRow}>
                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.facebookIcon]}>
                        <Text style={styles.iconText}>f</Text>
                      </View>
                      <Text style={styles.optionText}>Facebook</Text>
                    </View>

                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.instagramIcon]}>
                        <Text style={styles.iconText}>Ig</Text>
                      </View>
                      <Text style={styles.optionText}>Instagram</Text>
                    </View>

                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.threadsIcon]}>
                        <Text style={styles.iconText}>T</Text>
                      </View>
                      <Text style={styles.optionText}>Threads</Text>
                    </View>
                  </View>

                  <View style={styles.shareRow}>
                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.linkedinIcon]}>
                        <Text style={styles.iconText}>in</Text>
                      </View>
                      <Text style={styles.optionText}>LinkedIn</Text>
                    </View>

                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.dropboxIcon]}>
                        <Text style={styles.iconText}>D</Text>
                      </View>
                      <Text style={styles.optionText}>Dropbox</Text>
                    </View>

                    <View style={styles.shareOption}>
                      <View style={[styles.shareIcon, styles.twitterIcon]}>
                        <Text style={styles.iconText}>X</Text>
                      </View>
                      <Text style={styles.optionText}>Twitter</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Tab</Text>
      <Text style={styles.subtitle}>Welcome to the eCommerce app</Text>

      <View style={styles.linkContainer}>
        <Pressable
          style={styles.button}
          onPress={toggleModal}
        >
          <Text style={styles.buttonText}>Open Modal</Text>
        </Pressable>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={toggleBottomSheet}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      {bottomSheetModal}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Modal Title</Text>
                <Text style={styles.modalText}>This is the modal content. You can put any components here.</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleModal}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomSheetOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheetContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 'auto',
    minHeight: 300,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  bottomSheetInner: {
    padding: 16,
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomSheetHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    alignSelf: 'center',
  },
  closeIconButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 18,
    color: '#555',
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  shareOptions: {
    marginTop: 10,
  },
  shareRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  shareOption: {
    alignItems: 'center',
    width: '30%',
  },
  shareIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 14,
  },
  facebookIcon: {
    backgroundColor: '#1877F2',
  },
  instagramIcon: {
    backgroundColor: '#E1306C',
  },
  threadsIcon: {
    backgroundColor: '#000000',
  },
  linkedinIcon: {
    backgroundColor: '#0077B5',
  },
  dropboxIcon: {
    backgroundColor: '#0061FF',
  },
  twitterIcon: {
    backgroundColor: '#1DA1F2',
  },
});