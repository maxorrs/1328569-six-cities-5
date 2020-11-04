import {AuthorizationStatus} from '../consts';
import {NameSpace} from '../store/reducers/root-reducer';

export const noop = () => {};

export const reviewsMockWithoutAdapt = [
  {
    comment: `Abc`,
    date: `2020-10-28T11:53:40.137Z`,
    id: 1,
    rating: 2,
    user: {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
      'id': 19,
      'is_pro': false,
      'name': `B`
    }
  },
  {
    comment: `AbcAbc`,
    date: `2020-11-28T11:53:40.137Z`,
    id: 2,
    rating: 4,
    user: {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
      'id': 21,
      'is_pro': false,
      'name': `A`
    }
  },
];

export const reviewMock = {
  user: {
    name: `A`,
    avatarUrl: `1`
  },
  comment: `123`,
  rating: 2,
  date: `2020-10-28T11:53:40.137Z`
};

export const getOffer = ({isFavorite = false, isPremium = false} = {}) => {
  return {
    'city': {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    'previewImage': `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    'images': [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`],
    'title': `Canal View Prinsengracht`,
    isFavorite,
    isPremium,
    'isBookmark': false,
    'is_bookmark': false,
    'is_favorite': isFavorite,
    'is_premium': isPremium,
    'rating': 4.7,
    'type': `Room`,
    'bedrooms': 1,
    'maxAdults': 3,
    'price': 298,
    'goods': [`Laptop friendly workspace`, `Breakfast`, `Washer`],
    'features': [
      {field: `entire`, label: `Room`},
      {field: `bedrooms`, label: `1 Beedroom`},
      {field: `adults`, label: `Max 3 adults`}
    ],
    'host': {
      'is_pro': true,
      'id': 25,
      'name': `Angelina`,
      'isPro': true,
      'avatar_url': `img/avatar-angelina.jpg`,
      'avatarUrl': `img/avatar-angelina.jpg`
    },
    'description': `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    'location': {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    'id': 1
  };
};

export const offers = [
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`],
    title: `Canal View Prinsengracht`,
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    type: `Room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 298,
    goods: [`Laptop friendly workspace`, `Breakfast`, `Washer`],
    features: [
      {field: `entire`, label: `Room`},
      {field: `bedrooms`, label: `1 Beedroom`},
      {field: `adults`, label: `Max 3 adults`}
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    id: 1
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`],
    title: `Canal View Prinsengracht`,
    isFavorite: true,
    isPremium: true,
    rating: 4,
    type: `Room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 2298,
    goods: [`Laptop friendly workspace`, `Breakfast`, `Washer`],
    features: [
      {field: `entire`, label: `Room`},
      {field: `bedrooms`, label: `1 Beedroom`},
      {field: `adults`, label: `Max 3 adults`}
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    id: 2
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`, `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`],
    title: `Canal View Prinsengracht`,
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    type: `Room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 350,
    goods: [`Breakfast`, `Washer`],
    features: [
      {field: `entire`, label: `Room`},
      {field: `bedrooms`, label: `4 Beedroom`},
      {field: `adults`, label: `Max 2 adults`}
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    id: 3
  }
];

export const offersWithoutAdapt = [
  {
    'bedrooms': 2,
    'city': {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      },
    },
    'description': `Abc`,
    'features': Array(3),
    'goods': [`Air conditioning`, `Aaa`],
    'host': {
      'avatar_url': `img/avatar-angelina.jpg`,
      'id': 25,
      'is_pro': true,
      'name': `Angelina`
    },
    'id': 2,
    'images': [`1`, `2`],
    'is_favorite': true,
    'is_premium': false,
    'location': {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    'max_adults': 4,
    'preview_image': `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    'price': 113,
    'rating': 3.4,
    'title': `Loft Studio in the Central Area`,
    'type': `hotel`
  },
  {
    'bedrooms': 4,
    'city': {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      },
    },
    'description': `Gff`,
    'features': Array(3),
    'goods': [`Ccc`, `Bbb`],
    'host': {
      'avatar_url': `img/avatar-angelina.jpg`,
      'id': 28,
      'is_pro': true,
      'name': `Angelina`
    },
    'id': 5,
    'images': [`3`, `4`],
    'is_favorite': true,
    'is_premium': false,
    'location': {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    'max_adults': 4,
    'preview_image': `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    'price': 113,
    'rating': 3.4,
    'title': `Loft Studio in the Central Area`,
    'type': `hotel`
  }
];

const userDataMock = {
  'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/8.jpg`,
  'email': `sad@a.ru`,
  'id': 1,
  'is_pro': false,
  'name': `sad`
};

export const offersCoordsMock = [
  {id: 76, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 77, location: [52.37554, 4.9019759999999994], zoom: 16},
  {id: 78, location: [52.37554, 4.9019759999999994], zoom: 16}
];

export const cityCoordsMock = {
  city: `Amsterdam`,
  location: [52.385540000000006, 4.902976],
  zoom: 16
};

export const featuresMock = [
  {field: `entire`, label: `a`},
  {field: `bedrooms`, label: `b`},
  {field: `adults`, label: `c`}
];

export const initialStateMock = {
  [NameSpace.DATA]: {
    favorites: offersWithoutAdapt,
    offers: offersWithoutAdapt,
    reviews: reviewsMockWithoutAdapt,
    offersNearby: [],
    offer: {},
    statusOffers: false,
    statusOffer: false,
    statusOffersNearby: false,
    statusFavorites: false,
    statusReviews: false,
    statusSendReview: false,
    sentReviewHasError: false
  },
  [NameSpace.APP_STATE]: {
    selectedCity: `Amsterdam`,
    activeCard: -1,
    isSortMenuOpen: false,
    selectedSortType: `Popular`
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    userData: userDataMock,
    hasError: false,
    isDataChecked: false,
    isLoadAuthStatus: false
  }
};
