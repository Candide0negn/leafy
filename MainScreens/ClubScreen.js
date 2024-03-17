import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  BackHandler,
} from "react-native";
import {
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";

const clubsData = [
  {
    id: "1",
    name: "EcoCann",
    address: "Pariser-Straße 22, 67663 Kaiserslautern",
    rating: "3.5",
    imageUrl: require("../assets/ttg.png"), // Replace with your image URL
    phone: "0121432414",
    email: "ecocann@gmail.com",
    website: "www.Ecocann.de",
    amount: "40",
    AboutUs:
      "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium. Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima. Et cupiditate sapiente ex reiciendis deleniti et illo nesciunt. ",
    reviews: [
      {
        username: "Anne Marie",
        comment:
          "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium.",
        rating: 4.0,
      },
      {
        username: "John Gottie",
        comment:
          "Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima.",
        rating: 5.0,
      },
    ],
  },
  {
    id: "2",
    name: "Rastafarians",
    address: "Mainzer-Straße 1, 67634 Kaiserslautern",
    rating: "4.2",
    imageUrl: require("../assets/ttp.png"),
    phone: "0121432414",
    email: "BlauBlauh@gmail.com",
    website: "www.Rastafari.de",
    amount: "40",
    AboutUs:
      "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium. Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima. Et cupiditate sapiente ex reiciendis deleniti et illo nesciunt. ",
    reviews: [
      {
        username: "Anne Marie",
        comment:
          "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium.",
        rating: 4.0,
      },
      {
        username: "John Gottie",
        comment:
          "Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima.",
        rating: 5.0,
      },
    ],
  },
  {
    id: "3",
    name: "Zagazillion",
    address: "Pariser-Straße 22, 67663 Kaiserslautern",
    rating: "4.2",
    imageUrl: require("../assets/ttf.jpg"),
    phone: "0121432414",
    email: "Zillions@gmail.com",
    website: "www.ZiggiZagga.de",
    amount: "40",
    AboutUs:
      "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium. Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima. Et cupiditate sapiente ex reiciendis deleniti et illo nesciunt. ",
    reviews: [
      {
        username: "Anne Marie",
        comment:
          "Lorem ipsum dolor sit amet. Non quibusdam praesentium id sint quasi est velit nisi est eveniet praesentium.",
        rating: 4.0,
      },
      {
        username: "John Gottie",
        comment:
          "Quo consequatur laborum quo vero praesentium et voluptas tempore et architecto minima.",
        rating: 5.0,
      },
    ],
  },
];

const ClubCard = ({ club, openModal }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => openModal(club)}
    >
      <Image source={club.imageUrl} style={styles.clubImage} />

      <BlurView intensity={100} tint="light" style={[styles.cardContent]}>
        <LinearGradient
          colors={[`rgba(255, 255, 255, 0.6)`, `rgba(255, 255, 255, 0.8)`]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.clubName}>{club.name}</Text>
            <Text style={styles.clubAddress}>{club.address}</Text>
          </View>
          <Text style={styles.clubRating}>{club.rating} ★</Text>
        </LinearGradient>
      </BlurView>
    </TouchableOpacity>
  );
};

const ClubScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [radiusModalVisible, setRadiusModalVisible] = useState(false);
  const [selectedClub, setSelectedClub] = useState({
    id: "",
    name: "",
    address: "",
    rating: "",
    imageUrl: "",
    phone: "",
    email: "",
    website: "",
    amount: "",
    AboutUs: "",
    reviews: [],
  });
  const [radius, setRadius] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (club) => {
    setSelectedClub(club);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleClose = () => {
    //onRadiusChange(radius);
    setRadiusModalVisible(false);
  };
  const handleOpen = () => {
    setRadiusModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <ClubCard club={item} openModal={handleOpenModal} />
  );
  const filteredClubs = clubsData.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.header}>Wählen Sie Ihr Club...</Text>
        <View style={styles.searchSpace}>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="grey" />
            <TextInput
              placeholder="Club Name"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <TouchableOpacity style={styles.location} onPress={handleOpen}>
            <Entypo name="location" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredClubs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView>
                <View
                  style={{ flex: 1 }}
                  onStartShouldSetResponder={() => true}
                >
                  <View style={styles.modalImageContainer}>
                    <Image
                      source={selectedClub.imageUrl}
                      style={styles.modalImage}
                    />
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.modalClubName}>
                        {selectedClub.name}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles.modalRating}>
                          {selectedClub.rating}{" "}
                        </Text>
                        <AntDesign name="star" size={15} color="#0F4E1D" />
                      </View>
                    </View>

                    <View style={styles.modalInfoContainer}>
                      <View style={styles.modalInfo}>
                        <MaterialCommunityIcons
                          name="web"
                          size={20}
                          color="#0F4E1D"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{selectedClub.website}</Text>
                      </View>
                      <View style={styles.modalInfo}>
                        <MaterialCommunityIcons
                          name="email"
                          size={20}
                          color="#0F4E1D"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{selectedClub.email}</Text>
                      </View>
                      <View style={styles.modalInfo}>
                        <MaterialCommunityIcons
                          name="phone"
                          size={20}
                          color="#0F4E1D"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{selectedClub.phone}</Text>
                      </View>
                      <View style={styles.modalInfo}>
                        <Entypo
                          name="location-pin"
                          size={20}
                          color="#0F4E1D"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{selectedClub.address}</Text>
                      </View>
                      <View style={styles.modalInfo}>
                        <MaterialIcons
                          name="people"
                          size={20}
                          color="#0F4E1D"
                          style={{ marginRight: 5 }}
                        />
                        <Text>{selectedClub.amount} / 500</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.membershipButton}
                      onPress={() => navigation.navigate("Home")}
                    >
                      <Text style={styles.membershipButtonText}>
                        Mitglied Werden
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.sectionTitle}>Über uns</Text>
                    <Text>{selectedClub.AboutUs}</Text>
                    <Text style={styles.sectionTitle}>Bewertungen</Text>
                    <View style={styles.reviewsContainer}>
                      {selectedClub.reviews.map((review, index) => (
                        <View key={index} style={styles.reviewCard}>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Text style={styles.reviewUsername}>
                              {review.username}
                            </Text>
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {Array.from(
                                { length: Math.floor(review.rating) },
                                (_, i) => (
                                  <AntDesign
                                    key={i}
                                    name="star"
                                    size={12}
                                    color="gold"
                                  />
                                )
                              )}
                              {review.rating % 1 !== 0 && (
                                <AntDesign
                                  name="staro"
                                  size={12}
                                  color="gold"
                                />
                              )}
                            </View>
                          </View>
                          <Text style={styles.reviewComment}>
                            {review.comment}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={radiusModalVisible}
        onRequestClose={handleClose}
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={[styles.modalOverlay, { justifyContent: "center" }]}>
            <View style={styles.modalView}>
              <Text style={{ marginBottom: 10 }}>Umkreis: {radius} km</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={radius}
                onValueChange={setRadius}
                minimumTrackTintColor="#1fb28a"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#b9e4c9"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#91C66A", // Replace with the actual background color of your app
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
  },
  searchBar: {
    borderRadius: 10,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    backgroundColor: "white",
  },
  searchSpace: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  location: {
    flex: 1,
    alignItems: "flex-end",
  },
  cardContainer: {
    backgroundColor: "white", // Replace with your card's background color
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3, // for android shadow
    shadowColor: "#000", // for ios shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 180,
  },
  clubImage: {
    width: "100%",
    height: "100%", // Adjust the height to match your design
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  clubName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clubAddress: {
    fontSize: 12,
    color: "gray",
  },
  clubRating: {
    fontSize: 14,
    color: "black",
    marginTop: 5,
  },
  separator: {
    height: 10, // You can adjust the separator size
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    marginHorizontal: 20,
    height: "85%",
    marginTop: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    width: "90%",
  },
  modalImageContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 200,
    overflow: "hidden",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  modalClubName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalRating: {
    fontSize: 18,
    fontWeight: "500",
  },
  modalInfoContainer: {
    marginVertical: 10,
  },
  modalInfo: {
    flexDirection: "row",
    marginBottom: 8,
  },
  membershipButton: {
    backgroundColor: "#0F4E1D", // Adjust color as needed
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
  membershipButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 18,
  },
  reviewsContainer: {
    padding: 10,
  },
  reviewCard: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
    //borderWidth:1,
    borderColor: "grey",
  },
  reviewUsername: {
    fontWeight: "bold",
  },
  reviewComment: {
    color: "grey",
  },
  reviewRating: {
    fontWeight: "600",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ClubScreen;
