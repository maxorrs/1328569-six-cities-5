import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {data, DataActionType, DataActionCreator} from './data';
import * as APIAction from '../../api-actions';
import {getApiRoute, getAppRoute} from '../../../consts';
import {AppStateActionType} from "../app-state/app-state";

const noop = () => {};

const api = createAPI(noop);

const getOffersMock = (count) => {
  const templateOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        'city': {
          'name': `Amsterdam`,
          'location': {
            'latitude': 51.225402,
            'longitude': 6.776314,
            'zoom': 13
          }
        },
        'preview_image': `url`,
        'images': [`url1`, `url2`],
        'title': `Canal View Prinsengracht`,
        'is_favorite': Boolean(Math.random()),
        'is_premium': false,
        'rating': 4.7,
        'type': `room`,
        'bedrooms': 1,
        'max_adults': 3,
        'price': 298,
        'goods': [`Laptop friendly workspace`, `Breakfast`, `Washer`],
        'host': {
          'id': 25,
          'name': `Angelina`,
          'is_pro': true,
          'avatar_url': `img/avatar-angelina.jpg`
        },
        'description': `Description`,
        'location': {
          'latitude': 51.222402,
          'longitude': 6.786314,
          'zoom': 16
        },
        'id': index + 1
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
};

const offers = getOffersMock(3);

const offer = getOffersMock(1);

const reviews = [
  {
    'comment': `Comment`,
    'date': `2020-10-30T19:03:49.647Z`,
    'id': 1,
    'rating': 3,
    'user': {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/4.jpg`,
      'id': 13,
      'is_pro': false,
      'name': `Zak`,
    }
  },
  {
    'comment': `Comment2`,
    'date': `2020-10-30T19:03:49.647Z`,
    'id': 2,
    'rating': 5,
    'user': {
      'avatar_url': `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
      'id': 12,
      'is_pro': true,
      'name': `Abc`,
    }
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(data(void 0, {})).toEqual({
    offers: [],
    offersNearby: [],
    offer: {},
    favorites: [],
    reviews: [],
    statusOffers: true,
    statusOffer: true,
    statusOffersNearby: true,
    statusFavorites: true,
    statusReviews: true,
    statusSendReview: false,
    sentReviewHasError: false
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for offers returns correct action`, () => {
    expect(DataActionCreator.loadOffers(offers)).toEqual({
      type: DataActionType.LOAD_OFFERS,
      payload: offers
    });
  });

  it(`Action creator for offers nearby returns correct action`, () => {
    expect(DataActionCreator.loadOffersNearby(offers)).toEqual({
      type: DataActionType.LOAD_OFFERS_NEARBY,
      payload: offers
    });
  });

  it(`Action creator for offer returns correct action`, () => {
    expect(DataActionCreator.loadOffer(offer)).toEqual({
      type: DataActionType.LOAD_OFFER,
      payload: offer
    });
  });

  it(`Action creator for offer favorites returns correct action`, () => {
    expect(DataActionCreator.loadFavorites(offers)).toEqual({
      type: DataActionType.LOAD_FAVORITES,
      payload: offers
    });
  });

  it(`Action creator for reviews returns correct action`, () => {
    expect(DataActionCreator.loadReviews(reviews)).toEqual({
      type: DataActionType.LOAD_REVIEWS,
      payload: reviews
    });
  });

  it(`Action creator for status offers returns correct action`, () => {
    expect(DataActionCreator.toggleStatusOffers(true)).toEqual({
      type: DataActionType.STATUS_OFFERS,
      payload: true
    });
  });

  it(`Action creator for status offer returns correct action`, () => {
    expect(DataActionCreator.toggleStatusOffer(true)).toEqual({
      type: DataActionType.STATUS_OFFER,
      payload: true
    });
  });

  it(`Action creator for status offers nearby returns correct action`, () => {
    expect(DataActionCreator.toggleStatusOffersNearby(true)).toEqual({
      type: DataActionType.STATUS_OFFERS_NEARBY,
      payload: true
    });
  });

  it(`Action creator for status favorites returns correct action`, () => {
    expect(DataActionCreator.toggleStatusFavorites(true)).toEqual({
      type: DataActionType.STATUS_FAVORITES,
      payload: true
    });
  });

  it(`Action creator for status reviews returns correct action`, () => {
    expect(DataActionCreator.toggleStatusReviews(true)).toEqual({
      type: DataActionType.STATUS_REVIEWS,
      payload: true
    });
  });

  it(`Action creator for status send review returns correct action`, () => {
    expect(DataActionCreator.toggleStatusSendReview(true)).toEqual({
      type: DataActionType.STATUS_SEND_REVIEW,
      payload: true
    });
  });

  it(`Action creator for status sent review has error returns correct action`, () => {
    expect(DataActionCreator.sentReviewHasError(true)).toEqual({
      type: DataActionType.SENT_REVIEW_HAS_ERROR,
      payload: true
    });
  });

  it(`Action creator for reset review error returns correct action`, () => {
    expect(DataActionCreator.resetReviewError()).toEqual({
      type: DataActionType.RESET_REVIEW_ERROR
    });
  });
});

describe(`Reducer should update is correctly`, () => {
  it(`Reducer should update offers`, () => {
    expect(data({
      offers: []
    }, {
      type: DataActionType.LOAD_OFFERS,
      payload: offers
    })).toEqual({
      offers
    });
  });

  it(`Reducer should update offers nearby`, () => {
    expect(data({
      offersNearby: []
    }, {
      type: DataActionType.LOAD_OFFERS_NEARBY,
      payload: offers
    })).toEqual({
      offersNearby: offers
    });
  });

  it(`Reducer should update offer`, () => {
    expect(data({
      offer: {}
    }, {
      type: DataActionType.LOAD_OFFER,
      payload: offer
    })).toEqual({
      offer
    });
  });

  it(`Reducer should update favorites`, () => {
    expect(data({
      favorites: []
    }, {
      type: DataActionType.LOAD_FAVORITES,
      payload: offers
    })).toEqual({
      favorites: offers
    });
  });

  it(`Reducer should update reviews`, () => {
    expect(data({
      reviews: []
    }, {
      type: DataActionType.LOAD_REVIEWS,
      payload: reviews
    })).toEqual({
      reviews
    });
  });

  it(`Reducer should update status offers`, () => {
    expect(data({
      statusOffers: false
    }, {
      type: DataActionType.STATUS_OFFERS,
      payload: true
    })).toEqual({
      statusOffers: true
    });
  });

  it(`Reducer should update status offer`, () => {
    expect(data({
      statusOffer: false
    }, {
      type: DataActionType.STATUS_OFFER,
      payload: true
    })).toEqual({
      statusOffer: true
    });
  });

  it(`Reducer should update status offers nearby`, () => {
    expect(data({
      statusOffersNearby: false
    }, {
      type: DataActionType.STATUS_OFFERS_NEARBY,
      payload: true
    })).toEqual({
      statusOffersNearby: true
    });
  });

  it(`Reducer should update status favorites`, () => {
    expect(data({
      statusFavorites: false
    }, {
      type: DataActionType.STATUS_FAVORITES,
      payload: true
    })).toEqual({
      statusFavorites: true
    });
  });

  it(`Reducer should update status reviews`, () => {
    expect(data({
      statusReviews: false
    }, {
      type: DataActionType.STATUS_REVIEWS,
      payload: true
    })).toEqual({
      statusReviews: true
    });
  });

  it(`Reducer should update status send review`, () => {
    expect(data({
      statusSendReview: false
    }, {
      type: DataActionType.STATUS_SEND_REVIEW,
      payload: true
    })).toEqual({
      statusSendReview: true
    });
  });

  it(`Reducer should update status review has error`, () => {
    expect(data({
      sentReviewHasError: false
    }, {
      type: DataActionType.SENT_REVIEW_HAS_ERROR,
      payload: true
    })).toEqual({
      sentReviewHasError: true
    });
  });

  it(`Reducer should reset status review has error`, () => {
    expect(data({
      sentReviewHasError: true
    }, {
      type: DataActionType.RESET_REVIEW_ERROR,
      payload: false
    })).toEqual({
      sentReviewHasError: false
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadOffers = APIAction.fetchOffersList();

    apiMock
      .onGet(getApiRoute.offers())
      .reply(200, offers);

    return loadOffers(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_OFFERS,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_OFFERS,
          payload: offers
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_OFFERS,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /hotel/1 GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadOffer = APIAction.fetchOffer(id);

    apiMock
      .onGet(getApiRoute.offer(id))
      .reply(200, offer);

    return loadOffer(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_OFFER,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_OFFER,
          payload: offer
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_OFFER,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /hotel/1/nearby GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadOffersNearby = APIAction.fetchOffersNearbyList(id);

    apiMock
      .onGet(getApiRoute.nearby(id))
      .reply(200, offers);

    return loadOffersNearby(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_OFFERS_NEARBY,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_OFFERS_NEARBY,
          payload: offers
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_OFFERS_NEARBY,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /favorites GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavorites = APIAction.fetchFavoritesList();

    apiMock
      .onGet(getApiRoute.favorites())
      .reply(200, offers);

    return loadFavorites(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_FAVORITES,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_FAVORITES,
          payload: offers
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_FAVORITES,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /comments/1 GET 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const loadReviews = APIAction.fetchReviews(id);

    apiMock
      .onGet(getApiRoute.reviews(id))
      .reply(200, reviews);

    return loadReviews(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_REVIEWS,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.LOAD_REVIEWS,
          payload: reviews
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_REVIEWS,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /favorite/1/1 POST 401`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const valueBookmark = 1;
    const changeBookmark = APIAction.changeBookmarkStatus(id, valueBookmark);

    apiMock
      .onPost(getApiRoute.bookmark(id, valueBookmark))
      .reply(401);

    return changeBookmark(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: AppStateActionType.REDIRECT_TO_ROUTE,
          payload: getAppRoute.login()
        });
      });
  });

  it(`Should make a correct API call to /favorite/1/1 POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const valueBookmark = 1;
    const changeBookmark = APIAction.changeBookmarkStatus(id, valueBookmark);

    apiMock
      .onPost(getApiRoute.bookmark(id, valueBookmark))
      .reply(200);

    return changeBookmark(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /comments/1 POST 200`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const review = {review: `123`, rating: 2};
    const sendReviewProcess = APIAction.sendReview(id, review);

    apiMock
      .onPost(getApiRoute.reviews(id))
      .reply(200, reviews);

    return sendReviewProcess(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_SEND_REVIEW,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.SENT_REVIEW_HAS_ERROR,
          payload: false
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.LOAD_REVIEWS,
          payload: reviews
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: DataActionType.STATUS_SEND_REVIEW,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /comments/1 POST 400`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const review = {a: `123`, rating: 2};
    const sendReviewProcess = APIAction.sendReview(id, review);

    apiMock
      .onPost(getApiRoute.reviews(id))
      .reply(400);

    return sendReviewProcess(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.STATUS_SEND_REVIEW,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: DataActionType.SENT_REVIEW_HAS_ERROR,
          payload: true
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: DataActionType.STATUS_SEND_REVIEW,
          payload: false
        });
      });
  });
});
