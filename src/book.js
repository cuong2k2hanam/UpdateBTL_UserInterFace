const books = [
  {
    bookId: 0,
    categoryId: 0,
    bookName: "Đắc nhân tâm",
    bookUri:
      "https://docs.google.com/uc?export=download&id=1siktRiZKgIVry_toIQraLXNaBEYLjYWh",
    audio:
      "https://drive.google.com/u/3/uc?id=1JP-EhyRRWjYX-e11mPNlrs-BS5chEL72&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Khoinghiep/Dac-nhan-tam-500x554.jpg",
    bookAuthor: "Dale Carnegie",
  },
  {
    bookId: 1,
    categoryId: 0,
    bookName: "Nhà giả kim",
    bookUri:
      "https://drive.google.com/u/0/uc?id=1rzZth3LHHWTtvtYYOjX9sNX3aUia_ppC&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1KR1h950nvDdMP_qxzOyH8ctGzy5lOWKH&export=download",
    bookImg:
      "https://www.khaitam.com/Data/Sites/1/Product/14606/nha-gia-kim.png",
    bookAuthor: "Paulo Coelho",
  },
  {
    bookId: 2,
    categoryId: 0,
    bookName: "Muôn kiếp nhân sinh",
    bookUri:
      "https://drive.google.com/u/3/uc?id=1F9uvI7Vnv9YIC9_DNSEysJnyB9Ltinq0&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1jS-lELr7tsjmUHQbAUnVHKz8lHd0VZ5d&export=download",
    bookImg:
      "https://vietnambooks.vn/wp-content/uploads/2021/01/Muon-kiep-than-sinh.png",
    bookAuthor: "Paulo Coelho",
  },
  {
    bookId: 3,
    categoryId: 0,
    bookName: "Dế mèn phiêu lưu ký",
    bookUri:
      "https://drive.google.com/uc?id=1I2qzQv8FJPZ3WvBs8KfYpWMoQNPiLmej&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1_VoLOCXtUtAHa6tWo38LOauKCdEduFhr&export=download",
    bookImg:
      "https://static.8cache.com/cover/o/eJzLyTDW1_VIzDROLfM3Noh31A8LM8zQLQlx8Uj11HeEgrw8V_0o5-Ck1IDyQEf3bP1yI0NT3QxjIyMARh4SLA==/de-men-phieu-luu-ky.jpg",
    bookAuthor: "Tô Hoài",
  },
  {
    bookId: 4,
    categoryId: 0,
    bookName: "Mặc kệ thiên hạ sống như người nhật",
    bookUri:
      "https://docs.google.com/uc?export=download&id=1siktRiZKgIVry_toIQraLXNaBEYLjYWh",
    audio:
      "https://drive.google.com/u/3/uc?id=1TfunffAZg7PgwGdxDalV3B_J5VK5d1Yb&export=download",
    bookImg:
      "https://www.dtv-ebook.com/images/Cover/34308532124_7eceb70b5c_o.jpg",
    bookAuthor: "Mari Tamagawa",
  },
  {
    bookId: 5,
    categoryId: 1,
    bookName: "Đời thay đổi khi ta thay đổi - I",
    bookUri:
      "https://docs.google.com/uc?export=download&id=0B5UdXNci1L7kME4wQUdVMWVSTDQ",
    audio: "",
    bookImg:
      "https://taisachmoi.com/wp-content/uploads/2018/12/doi-thay-doi-khi-chung-ta-thay-doi-tap-5.jpg",
    bookAuthor: "Andrew Matthews",
  },
  {
    bookId: 6,
    categoryId: 1,
    bookName: "Tôi đúng bạn sai, giờ thì sao",
    bookUri:
      "https://docs.google.com/uc?export=download&id=0B5UdXNci1L7kb2I0U0l6ZW8tMEU",
    audio:
      "https://drive.google.com/u/3/uc?id=14xZd8s_pZBl8C3lt9L6YBuBg_3dy3d7o&export=download",
    bookImg:
      "https://metaisach.com/wp-content/uploads/2019/05/toi-dung-ban-sai-gio-thi-sao.jpg",
    bookAuthor: "Xavier Amador",
  },
  {
    bookId: 7,
    categoryId: 1,
    bookName: "Đời thay đổi khi tôi thay đổi - III",
    bookUri:
      "https://drive.google.com/uc?id=1-hKosq7981J1nsTAj9R-vh73WeERAexn&export=download",
    audio: "",
    bookImg:
      "https://taisachmoi.com/wp-content/uploads/2018/12/doi-thay-doi-khi-chung-ta-thay-doi-tap-5.jpg",
    bookAuthor: "Andrew Matthews",
  },
  {
    bookId: 8,
    categoryId: 1,
    bookName: "Bà ngoại thời @",
    bookUri:
      "https://drive.google.com/uc?id=1rmackhFD8Z4q9bR9xse8EQKJ8PVn-EPq&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1_WYU1pDThLOEk-2FZs4QlJEmsNZG3ZRy&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Truyen%20cuoi/Ba-ngoai-thoi--500x554.jpg",
    bookAuthor: "Susie Morgenstern",
  },
  {
    bookId: 9,
    categoryId: 1,
    bookName: "Quảnh gánh lo mà vui sống",
    bookUri:
      "https://drive.google.com/u/3/uc?id=1gNyzl0Tx99J8ClF-d-dTjKqYMAfpzWwV&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1xBPvexIG3NKCxZI9BgEoQmaFw5WwUXAd&export=download",
    bookImg:
      "https://static.ecosite.vn/10558/product/2019/04/03/quang-ganh-lo-di-va-vui-song2-1554257940.png",
    bookAuthor: "Dale Caregie",
  },
  {
    bookId: 10,
    categoryId: 2,
    bookName: "Ngày xưa có một con bò",
    bookUri:
      "https://drive.google.com/u/3/uc?id=1ETbQ8-bLlyl7mqFUDt6-Ni6KJnTMv4N2&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1e0Z2__0x4IHdkpMy6pb-xS3_aMOEzFP-&export=download",
    bookImg:
      "https://trinhdinhlinh.com/sach/wp-content/uploads/2017/11/001-000-45.jpg",
    bookAuthor: "Camilo",
  },
  {
    bookId: 11,
    categoryId: 2,
    bookName: "Xách balo lên và đi",
    bookUri:
      "https://drive.google.com/uc?id=19jXUFtQqhw2u48Tb0O4ZejwBsFIBa2re&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1FO53A1lsnMoA4iaRJprk4fonSBRNdyl5&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Hoi-ky/Xach-ba-lo-len-va-di-tap-1-chau-a-la-nha-dung-khoc-202x224.jpg",
    bookAuthor: "Huyền Chip",
  },
  {
    bookId: 12,
    categoryId: 2,
    bookName: "Totto - Bên cửa sổ",
    bookUri:
      "https://drive.google.com/uc?id=1WCkAAZnp0IoniLWijqDKmPKX8c2omsuL&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1AJTW_UJ4khLYjdV57Uzhr2qlJQPWUW3M&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Hoi-ky/Totto-chan-ben-cua-so-202x224.jpg",
    bookAuthor: "Korusayanagi",
  },
  {
    bookId: 13,
    categoryId: 2,
    bookName: "Trí tuệ do thái",
    bookUri:
      "https://drive.google.com/u/3/uc?id=1aaPhN9CPq7mFd9QJFBNIf9JaXGEAXE1g&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1bpjDgBUR-voOd3_5Cu7qp1GFJTQi-LqE&export=download",
    bookImg:
      "https://sachhaymienphi.com/wp-content/uploads/2021/12/tri-tue-do-thai-sach-hay-mien-phi-696x696.jpg",
    bookAuthor: "Eran Katz",
  },
  {
    bookId: 14,
    categoryId: 2,
    bookName: "Mùa đông huyền bí",
    bookUri:
      "https://drive.google.com/uc?id=1IxWt2Ebary0AD-V6Q21ZKGCOAnWeG0pF&export=download",
    audio: "",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Thieu-nhi/Mua-dong-huyen-bi-202x224.jpg",
    bookAuthor: "Tom Jamm",
  },
  {
    bookId: 15,
    categoryId: 3,
    bookName: "Hai cha con và con lừa",
    bookUri:
      "https://drive.google.com/uc?id=1Micn6UMD11HizfqAUQTTwAm4Xoab4pak&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=15efRz_8MX_r6tfU_6SMkWozn20Q_t0Kq&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Thieu-nhi/Hai-cha-con-va-con-lua-202x224.jpg",
    bookAuthor: "AESOP",
  },
  {
    bookId: 16,
    categoryId: 3,
    bookName: "Chuyện con mèo và con chuột bạn thân của nó",
    bookUri:
      "https://drive.google.com/uc?id=1Hg7xJTlExIP6IUKnI6SHcb-F8DSICPOf&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1QeSyV_rIjzNBCKeA3XTKgZtY6edYUKIg&export=download",
    bookImg:
      "https://sachhoc.com/image/cache/catalog/Truyen/Thieu-nhi/Chuyen-con-meo-va-con-chuot-ban-than-cua-no-202x224.jpg",
    bookAuthor: "Luis",
  },
  {
    bookId: 17,
    categoryId: 3,
    bookName: "Dám bị ghét",
    bookUri:
      "https://drive.google.com/uc?id=1KPaimecVmHLqnUT0Skn-Ol-Kap2aUN9i&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1-hp3l4tTkeWVp7BJwCRucewS9Z6b4pRn&export=download",
    bookImg:
      "https://sachmoi.net/wp-content/uploads/2022/01/review-sach-dam-bi-ghet-PDF-105x168.jpg",
    bookAuthor: "Kishimi Ichigo",
  },
  {
    bookId: 18,
    categoryId: 3,
    bookName: "Đi tìm lẽ sống",
    bookUri:
      "https://drive.google.com/uc?id=1278m1Xn-neDSNdEeU49d9hm5F1zm4AX-&export=download",
    audio:
      "https://drive.google.com/u/3/uc?id=1-eEnFcDgfKIbIon8MC5FyxnpDEgCdmJx&export=download",
    bookImg:
      "https://sachmoi.net/wp-content/uploads/2022/01/review-sach-di-tim-le-song-PDF-105x168.jpg",
    bookAuthor: "Viktor Emil Frankl",
  },
  {
    bookId: 19,
    categoryId: 3,
    bookName: "Trên đường băng",
    bookUri:
      "https://docs.google.com/uc?export=download&id=0B5UdXNci1L7kTkJLcTZ3SG81STg",
    audio:
      "https://drive.google.com/u/3/uc?id=12FueQapS80K8n3SGVn_cN4SbLRrDnZpG&export=download",
    bookImg:
      "https://sachmoi.net/wp-content/uploads/2017/01/tren-duong-bang-ebook-pdf-105x168.jpg",
    bookAuthor: "Tony",
  },
];

const category = [
  {
    id: 0,
    name: "Tiểu thuyết",
  },
  {
    id: 1,
    name: "Thiếu nhi",
  },
  {
    id: 2,
    name: "Hài hước",
  },
  {
    id: 3,
    name: "Kỹ năng sống",
  },
];

const authors = [
  {
    id: 0,
    name: "Dale Carnegie",
    avatar:
      "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/author.jpg",
    story:
      "Dale Carnegie là một tác giả có sách bán chạy nhất, người đã trở thành người tiên phong trong lĩnh vực cải thiện bản thân . Dale Carnagey sinh ngày 24 tháng 11 năm 1888 tại Maryville, Missouri, ông lớn lên trong trang trại của gia đình mình bên ngoài thị trấn. Anh ấy thích các sự kiện diễn thuyết trước công chúng và tham gia vào đội tranh luận của trường trung học.",
  },
  {
    id: 1,
    name: "Paulo Coelho",
    avatar:
      "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/author-2.jpg",
    story:
      "Paulo Coelho de Souza là một nhà viết lời và viết tiểu thuyết người Brazil, đồng thời là thành viên của Học viện Văn học Brazil từ năm 2002. Cuốn tiểu thuyết Nhà giả kim của ông đã trở thành cuốn sách bán chạy nhất quốc tế và ông đã xuất bản thêm 28 cuốn sách kể từ đó.",
  },
  {
    id: 2,
    name: "Tô Hoài",
    avatar:
      "https://raw.githubusercontent.com/neihyud/UI/C%C6%B0%E1%BB%9Dng/images/author-3.jpg",
    story:
      "Tô Hoài là một trong những tên tuổi lớn của văn học hiện đại Việt Nam. Với 94 năm tuổi đời và hơn 70 năm tuổi nghề cùng số lượng tác phẩm đồ sộ, gần 200 đầu sách trải rộng trên nhiều mảng đề tài, có thể nói, Tô Hoài là nhà văn của nhiều thời, nhiều tầng lớp, nhiều độ tuổi khác nhau, một tác giả có tầm ảnh hưởng lớn đến nền văn học nghệ thuật nước nhà.",
  },
  {
    id: 3,
    name: "Mari Tamagawa",
    avatar:
      "https://github.com/neihyud/UI/blob/C%C6%B0%E1%BB%9Dng/images/author-4.jpg?raw=true",
    story:
      "Sang chấn tâm lý do tuổi thơ bất hạnh, do áp lực cuộc sống đè nặng…. khiến người bệnh ngẹt thở. Để tự điều trị cho chính mình, không có cách nào khác bạn phải đối mặt với nỗi đau và liếm láp vết thương. Những hướng dẫn từ chuyên gia tâm lý học lâm sàng Mari Tamagawa sẽ hữu ích dành cho bạn. Cô cũng là tác giả cuốn sách Mặc Kệ Thiên Hạ Sống Như Người Nhật nổi tiếng.",
  },
];

export { books, category, authors };
