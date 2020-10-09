export default [
  {
    id: `1`,
    city: `Amsterdam`,
    photos: [
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`
    ],
    isPremium: `true`,
    isBookmarked: `false`,
    title: `Beautiful & luxurious studio at great location`,
    type: `Apartment`,
    bedrooms: `3`,
    maxGuests: `3`,
    price: `100`,
    inside: [`Wi-Fi`, `Heating`, `Kitchen`],
    host: {
      imgUrl: `https://picsum.photos/74/74?random=${Math.random()}`,
      firstName: `Angelina`,
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      isProUser: `true`
    },
    reviews: [
      {
        id: `1`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Max`,
        rating: `2`,
        review: `Lorem`,
        date: `2018-11-28T10:29:31.238Z`
      },
      {
        id: `2`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Abc`,
        rating: `5`,
        review: `Lorem lorem`,
        date: `2015-02-20T19:29:31.238Z`
      }
    ]
  },
  {
    id: `2`,
    city: `Amsterdam`,
    photos: [
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`
    ],
    isPremium: `false`,
    isBookmarked: `true`,
    title: `Lorem ipsum dolor sit amet`,
    type: `Apartment`,
    bedrooms: `2`,
    maxGuests: `1`,
    price: `200`,
    inside: [`Frigde`, `Washing machine`, `Coffee machine`],
    host: {
      imgUrl: `https://picsum.photos/74/74?random=${Math.random()}`,
      firstName: `Ramil`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      isProUser: `false`
    }
  },
  {
    id: `3`,
    city: `Abc`,
    photos: [
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`
    ],
    isPremium: `true`,
    isBookmarked: `true`,
    title: `Maecenas iaculis lobortis consequat.`,
    type: `Apartment`,
    bedrooms: `2`,
    maxGuests: `1`,
    price: `500`,
    inside: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      imgUrl: `https://picsum.photos/74/74?random=${Math.random()}`,
      firstName: `John`,
      description: `Sed pulvinar aliquam enim at tristique. Quisque sollicitudin eget tellus quis pulvinar. Quisque pellentesque hendrerit.`,
      isProUser: `false`
    },
    reviews: [
      {
        id: `1`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Max`,
        rating: `5`,
        review: `Lorem`,
        date: `2018-11-28T10:29:31.238Z`
      },
      {
        id: `2`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Abc`,
        rating: `5`,
        review: `Lorem lorem`,
        date: `2015-02-20T19:29:31.238Z`
      }
    ]
  },
  {
    id: `4`,
    city: `Amsterdam`,
    photos: [
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`,
      `https://picsum.photos/260/200?random=${Math.random()}`
    ],
    isPremium: `true`,
    isBookmarked: `true`,
    title: `Maecenas consequat`,
    type: `Apartment`,
    bedrooms: `4`,
    maxGuests: `5`,
    price: `300`,
    inside: [`Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      imgUrl: `https://picsum.photos/74/74?random=${Math.random()}`,
      firstName: `Aaa`,
      description: `Sed pulvinar aliquam enim at tristique. Quisque sollicitudin eget tellus quis pulvinar. Quisque pellentesque hendrerit.`,
      isProUser: `true`
    },
    reviews: [
      {
        id: `1`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Max`,
        rating: `1`,
        review: `Lorem`,
        date: `2018-11-28T10:29:31.238Z`
      },
      {
        id: `2`,
        authorImg: `https://picsum.photos/54?random=${Math.random()}`,
        authorName: `Abc`,
        rating: `4`,
        review: `Lorem lorem`,
        date: `2015-02-20T19:29:31.238Z`
      }
    ]
  }
];
