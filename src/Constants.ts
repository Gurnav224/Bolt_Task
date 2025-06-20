const routes = {
  private: {
    index: {
      url: '/',
    },
    dashboard: {
      url: '/dashboard',
    },
  },
  public: {
    home: {
      url: '/',
    },
    homeAlt: {
      url: '/index',
    },
    homeAlt2: {
      url: '/home',
    },
    about: {
      url: '/about',
    },
    login: {
      url: '/login',
    },
    contact: {
      url: '/contact',
    },
    maintenance: {
      url: '/maintenance',
    },
    notFound: {
      url: '/*',
    },
    test: {
      url: '/test',
    },
  },
};

const screens = {
  wrapper: 1280,
  phoneUpTo: 767,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  ultraWide: 2560,
};

const Constants = {
  routes,
  screens,
};

export default Constants;
