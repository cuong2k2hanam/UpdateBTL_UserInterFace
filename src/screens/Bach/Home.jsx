import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, FONTS, SIZES, icons, images } from "../../../constants";

import { theme } from "../../theme";

import { books, category } from "../../book";

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{
          flex: 1,
          // borderLeftColor: COLORS.lightGray,
          // borderLeftColor: theme.colors.primary,
          borderLeftColor: COLORS.transparent,
          borderLeftWidth: 1,
        }}
      ></View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const profileData = {
    name: "Username",
    point: 200,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: "Other Words For Home",
    bookCover: images.otherWordsForHome,
    rating: 4.5,
    language: "Eng",
    pageNo: 341,
    author: "Jasmine Warga",
    genre: ["Lãng mạn", "Phiêu lưu", "Drama"],
    readed: "12k",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    backgroundColor: "rgba(240,240,232,0.9)",
    // backgroundColor: "red",
    navTintColor: "#000",
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: "The Metropolis",
    bookCover: images.theMetropolist,
    rating: 4.1,
    language: "Eng",
    pageNo: 272,
    author: "Seith Fried",
    genre: ["Phiêu lưu", "Drama"],
    readed: "13k",
    description:
      "In Metropolis, the gleaming city of tomorrow, the dream of the great American city has been achieved. But all that is about to change, unless a neurotic, rule-following bureaucrat and an irreverent, freewheeling artificial intelligence can save the city from a mysterious terrorist plot that threatens its very existence. Henry Thompson has dedicated his life to improving America's infrastructure as a proud employee of the United States Municipal Survey. So when the agency comes under attack, he dutifully accepts his unexpected mission to visit Metropolis looking for answers. But his plans to investigate quietly, quickly, and carefully are interrupted by his new partner: a day-drinking know-it-all named OWEN, who also turns out to be the projected embodiment of the agency's supercomputer. Soon, Henry and OWEN are fighting to save not only their own lives and those of the city's millions of inhabitants, but also the soul of Metropolis. The Municipalists is a thrilling, funny, and touching adventure story, a tour-de-force of imagination that trenchantly explores our relationships to the cities around us and the technologies guiding us into the future.",
    backgroundColor: "rgba(247,239,219,0.9)",
    navTintColor: "#000",
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: "The Tiny Dragon",
    bookCover: images.theTinyDragon,
    rating: 3.5,
    language: "Eng",
    pageNo: 110,
    author: "Ana C Bouvier",
    genre: ["Drama", "Phiêu lưu", "Lãng mạn"],
    readed: "13k",
    description:
      "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
    backgroundColor: "rgba(119,77,143,0.9)",
    navTintColor: "#FFF",
  };

  const myBook = {
    author: "Dale Carnegie",
    backgroundColor: "rgba(240,240,232,0.9)",
    bookCover: {
      uri: "https://sachhoc.com/image/cache/catalog/Khoinghiep/Dac-nhan-tam-500x554.jpg",
    },
    bookName: "Đắc nhân tâm",
    description:
      "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
    genre: ["Tiểu thuyết"],
    id: 0,
    language: "Vn",
    navTintColor: "#FFF",
    pageNo: 341,
    rating: 4.5,
    readed: "12k",
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: "75%",
      lastRead: "3d 5h",
    },
    {
      ...bookTheMetropolis,
      completion: "23%",
      lastRead: "10d 5h",
    },
    {
      ...bookTheTinyDragon,
      completion: "10%",
      lastRead: "1d 2h",
    },
    {
      ...myBook,
      completion: "10%",
      lastRead: "1d 2h",
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: "Nổi bật",
      books: [
        bookOtherWordsForHome,
        bookTheMetropolis,
        bookTheTinyDragon,
        myBook,
      ],
    },
    {
      id: 2,
      categoryName: "Phiêu lưu",
      books: [bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 3,
      categoryName: "Lãng mạn",
      books: [bookOtherWordsForHome, bookTheTinyDragon],
    },
    {
      id: 4,
      categoryName: "Drama",
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = React.useState(profileData);
  const [myBooks, setMyBooks] = React.useState(myBooksData);
  const [categories, setCategories] = React.useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  const constructorData = (books) => {
    // {
    //   bookId: 18,
    //   categoryId: 3,
    //   bookName: "Đi tìm lẽ sống",
    //   bookUri:
    //     "https://drive.google.com/uc?id=1278m1Xn-neDSNdEeU49d9hm5F1zm4AX-&export=download",
    //   audio:
    //     "https://drive.google.com/u/3/uc?id=1-eEnFcDgfKIbIon8MC5FyxnpDEgCdmJx&export=download",
    //   bookImg:
    //     "https://sachmoi.net/wp-content/uploads/2022/01/review-sach-di-tim-le-song-PDF-105x168.jpg",
    //   bookAuthor: "Viktor Emil Frankl",
    // },
    // ///////////////////////////////////////////////
    const listBook = books.map((book, index) => {
      return {
        id: book.bookId,
        categoryId: book.categoryId,
        bookName: book.bookName,
        bookUri: book.bookUri,
        bookAudio: book.audio,
        bookCover: { uri: book.bookImg },
        rating: 4.5,
        language: "Vn",
        pageNo: 341,
        author: book.bookAuthor,
        genre: [category[book.categoryId].name],
        readed: "12k",
        description:
          "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives. At first, everything in America seems too fast and too loud. The American movies that Jude has always loved haven’t quite prepared her for starting school in the US—and her new label of 'Middle Eastern,' an identity she’s never known before. But this life also brings unexpected surprises—there are new friends, a whole new family, and a school musical that Jude might just try out for. Maybe America, too, is a place where Jude can be seen as she really is.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#FFF",
      };
    });

    ////////////////////////////////////////////////////
    const listBookData = listBook.map((book, index) => {
      return {
        ...book,
        completion: "75%",
        lastRead: "3d 5h",
      };
    });
    // console.log("listBook: ");
    // console.log(listBook);
    setMyBooks(listBookData);
    // ///////////////////////////////////////////////
    // {
    //   id: 1,
    //   categoryName: "Nổi bật",
    //   books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    // },
    // ///////////////////////////////////////////////
    const categoriesData = category.map((cat, index) => {
      let listBookCat = listBookData.filter((book, index) => {
        return book.genre.includes(cat.name);
      });

      return {
        id: cat.id,
        categoryName: cat.name,
        books: [...listBookCat],
      };
    });
    // console.log("categoryBook: ");
    // console.log(categoriesData);

    setCategories(categoriesData);
  };

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        {/* Greetings */}
        <View style={{ flex: 1 }}>
          <View style={{ marginRight: SIZES.padding }}>
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>Trang chủ</Text>
          </View>
        </View>

        {/* Points */}
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", padding: SIZES.padding }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius,
          }}
        >
          {/* Claim */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Claim")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.claim_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Claim
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* Get Point */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("Get Point")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.point_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                Get Point
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider />

          {/* My Card */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => console.log("My Card")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={icons.card_icon}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.white,
                }}
              >
                My Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderMyBookSection(myBooks) {
    const renderItem = ({ item, index }) => {
      // console.log(item);
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: index == 0 ? SIZES.padding : 0,
            marginRight: SIZES.radius,
          }}
          onPress={() =>
            navigation.navigate("BookNavigation", {
              screen: "BookInfo",
              mybook: item,
            })
          }
        >
          {/* Book Cover */}
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{
              width: 180,
              height: 250,
              borderRadius: 20,
            }}
          />

          {/* Book Info */}
          <View
            style={{
              marginTop: SIZES.radius,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginLeft: 5, ...FONTS.h3, color: COLORS.white }}>
              {item.bookName}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>Sách mới</Text>

          <TouchableOpacity onPress={() => console.log("See More")}>
            <Text
              style={{
                ...FONTS.body3,
                // color: COLORS.lightGray,
                color: "COLORS.darkBlue",
                alignSelf: "flex-start",
                textDecorationLine: "underline",
              }}
            >
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>

        {/* Books */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <FlatList
            data={myBooks}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ flex: 1, marginRight: SIZES.padding }}
          onPress={() => setSelectedCategory(item.id)}
        >
          {selectedCategory == item.id && (
            <Text style={{ ...FONTS.h2, color: COLORS.white }}>
              {item.categoryName}
            </Text>
          )}
          {selectedCategory != item.id && (
            <Text
              style={{
                ...FONTS.h2,
                // color: COLORS.lightGray,
                color: "COLORS.darkBlue",
              }}
            >
              {item.categoryName}
            </Text>
          )}
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];

    let selectedCategoryBooks = categories.filter(
      (a) => a.id == selectedCategory
    );

    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    function renderItem(item, index) {
      // console.log(item);
      return (
        <View key={index} style={{ marginVertical: SIZES.base }}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() =>
              navigation.navigate("BookNavigation", {
                screen: "BookInfo",
                mybook: item,
              })
            }
          >
            {/* Book Cover */}
            {console.log("Book Cover")}
            {console.log(item)}
            <Image
              source={item.bookCover}
              resizeMode="cover"
              style={{ width: 100, height: 150, borderRadius: 10 }}
            />

            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
              {/* Book name and author */}
              <View>
                <Text
                  style={{
                    paddingRight: SIZES.padding,
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}
                >
                  {item.bookName}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    // color: COLORS.lightGray,
                    color: "COLORS.darkBlue",
                  }}
                >
                  {item.author}
                </Text>
              </View>

              {/* Book Info */}
              <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    // tintColor: COLORS.lightGray,
                    tintColor: "COLORS.darkBlue",
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    // color: COLORS.lightGray,
                    color: "COLORS.darkBlue",
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.pageNo}
                </Text>

                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    // tintColor: COLORS.lightGray,
                    tintColor: "COLORS.darkBlue",
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body4,
                    // color: COLORS.lightGray,
                    color: "COLORS.darkBlue",
                    paddingHorizontal: SIZES.radius,
                  }}
                >
                  {item.readed}
                </Text>
              </View>

              {/* Genre */}
              <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
                {item.genre.includes("Tiểu thuyết") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkGreen,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>
                      Tiểu thuyết
                    </Text>
                  </View>
                )}
                {item.genre.includes("Thiếu nhi") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkRed,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>
                      Thiếu nhi
                    </Text>
                  </View>
                )}
                {item.genre.includes("Hài hước") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkYellow,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightYellow }}>
                      Hài hước
                    </Text>
                  </View>
                )}
                {item.genre.includes("Kỹ năng sống") && (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: SIZES.base,
                      marginRight: SIZES.base,
                      backgroundColor: COLORS.darkBlue,
                      height: 40,
                      borderRadius: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>
                      Kỹ năng sống
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            style={{ position: "absolute", top: 5, right: 15 }}
            onPress={() => console.log("Bookmark")}
          >
            <Image
              source={icons.bookmark_icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                // tintColor: COLORS.lightGray,
                tintColor: "COLORS.darkBlue",
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View
        style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}
      >
        {/* <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        /> */}
        {books.map((item, index) => {
          return renderItem(item, index);
        })}
      </View>
    );
  }

  useEffect(() => {
    constructorData(books);
  }, []);
  // console.log(
  //   "myBooks: -------------------------------------------------------------------------"
  // );
  // console.log(myBooks);
  // console.log(categoriesData);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={{ height: 80 }}>{renderHeader(profile)}</View>

      {/* Body Section */}
      <ScrollView style={{ marginTop: SIZES.radius }}>
        {/* Books Section */}
        <View>{renderMyBookSection(myBooks)}</View>

        {/* Categories Section */}
        <View style={{ marginTop: SIZES.padding }}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.darkBlue,
    // backgroundColor: theme.colors.primary,
    backgroundColor: COLORS.transparent,
  },
  test: {
    // fontFamily: ""
  },
});
