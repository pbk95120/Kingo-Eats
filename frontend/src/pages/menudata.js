const menuData = [
  // 학생식당
  {
    id: 1,
    restaurantType: "학생회관식당",
    name: "등심돈가스",
    price: "5500원",
    imagePath: "/images/등돈.jpg",
    describe:
      "일본 요리에 영향을 받은 한국식 돈까스로, 등심(돼지 등 살코기)을 얇게 편 후 빵가루를 입혀 기름에 튀겨낸 요리.",
  },
  {
    id: 2,
    name: "자장면",
    restaurantType: "학생회관식당",
    price: "5000원",
    imagePath: "/images/자장면.jpg",
    describe:
      "춘장을 다진 돼지고기와 다양한 야채와 함께 볶아서 진하고 고소한 맛을 낸 후, 쫄깃한 면 위에 부어서 제공되는 음식.",
  },
  {
    id: 3,
    name: "우삼겹고추장찌개",
    restaurantType: "학생회관식당",
    price: "5000원",
    imagePath: "/images/우삼순.jpg",
    describe:
      "쇠고기의 삼겹 부위인 우삼겹을 주 재료로 사용하고, 고추장을 베이스로 한 매콤한 한국의 찌개 요리. 다양한 야채와 두부나 버섯을 추가하여 푸짐하게 끓여낸 음식.",
  },
  {
    id: 4,
    name: "갈릭돈가스",
    restaurantType: "학생회관식당",
    price: "6500원",
    imagePath: "/images/갈릭돈까.jpg",
    describe: "바삭한 돈가스에 학생 식당만의 매콤달콤한 갈릭 소스가 추가된 것이 특징인 돈가스.",
  },
  //   {
  //     id: 5,
  //     name: "페퍼로니 조각피자",
  //     restaurantType: "학생회관식당",
  //     price: "7500원",
  //     imagePath: "/images/페퍼로니.jpg",
  //     describe: "바삭한 도우 위에 두툼한 햄이 올려진 전통 페퍼로니 피자. 매콤하면서도 새콤한 맛이 일품이다.",
  //   },

  // 공대식당
  {
    id: 5,
    name: "뚝배기차돌된장찌개",
    restaurantType: "공대식당",
    price: "5500원",
    imagePath: "/images/뚝차된.jpg",
    describe:
      "차돌박이라고도 불리는 얇게 썬 쇠고기를 주재료로, 된장을 베이스로 한 찌개 요리. 여러 가지 야채와 함께 뚝배기에 담겨 끓여져 제공.",
  },
  {
    id: 6,
    name: "제육볶음덮밥",
    restaurantType: "공대식당",
    price: "5500원",
    imagePath: "/images/제육덮밥.jpg",
    describe:
      "매콤하게 양념한 돼지고기를 볶아 밥 위에 올린 음식. 돼지고기를 고추장, 간장, 마늘, 설탕 등으로 만든 양념에 재워서 볶고, 이를  밥 위에 올려서 함께 제공.",
  },
  //   {
  //     id: 3,
  //     name: "고기+김치만두",
  //     restaurantType: "공대식당",
  //     price: "3500원",
  //     imagePath: "/images/만두.jpg",
  //     describe: "속이 꽉찬 고기만두와 매콤한 김치만두. 사이드 메뉴로서 항상 인기만점.",
  //   },
  //   {
  //     id: 4,
  //     name: "커리크림치킨텐더",
  //     restaurantType: "공대식당",
  //     price: "3500원",
  //     imagePath: "/images/커리치킨.webp",
  //     describe: "매콤한 치킨덴더 위에 달콤한 커리크림이 올려져 맛의 조화를 이루는 인기 사이드 메뉴.",
  //   },
  {
    id: 7,
    name: "파채불고기덮밥",
    restaurantType: "공대식당",
    price: "5500원",
    imagePath: "/images/파채불.jpg",
    describe: "공대 식당의 스테디셀러. 든든한 불고기 덮밥 위에 아삭한 파채가 올려져 식감을 더했다.",
  },
  {
    id: 8,
    name: "뚝배기유부김치라면전골",
    restaurantType: "공대식당",
    price: "5500원",
    imagePath: "/images/뚝배기.jpg",
    describe:
      "라면을 뚝배기에 끓여 김치와 함께 유부와 곁들여 먹는 전골. 일반적인 라면과는 달리 고소한 유부의 맛이 우러난 것이 특징이다.",
  },

  // 구시재
  {
    id: 9,
    restaurantType: "구시재식당",
    name: "돈육간장떡찜",
    price: "8000원",
    imagePath: "/images/돈육떡.jpg",
    describe: "돼지고기와 떡을 주 재료로 하여 간장 베이스의 양념으로 조리한 음식.",
  },
  {
    id: 10,
    restaurantType: "구시재식당",
    name: "뚝배기닭칼국수",
    price: "5500원",
    imagePath: "/images/닭칼.jpg",
    describe:
      "얼큰한 칼국수 국물에 쫄깃한 닭안심살이 더해진 여름철 보양식. 사골육수로 우려내어 깊은 국물 맛이 특징이다.",
  },
  {
    id: 11,
    restaurantType: "구시재식당",
    name: "순두부맑은탕",
    price: "8000원",
    imagePath: "/images/순두부맑은탕.jpg",
    describe: "멸치로 우려낸 육수에 순두부가 더해져 슴슴하면서도 고소한 맛이 조화를 이루는 맑은 탕.",
  },
  {
    id: 12,
    restaurantType: "구시재식당",
    name: "에그함박스테이크",
    price: "6000원",
    imagePath: "/images/에그함박.jpg",
    describe: "달콤한 소스와 두툼한 함박스테이크 위에 계란 후라이가 얹어져 든든한 한끼가 되는 영양식.",
  },
];

export default menuData;
