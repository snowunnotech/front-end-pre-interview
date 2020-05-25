export const state = () => ({
  features: {
    back: false,
    add: false,
    edit: false,
    save: false
  },
  title: ""
});

export const mutations = {
  FEATURES(state, features) {
    state.features = features;
  },
  TITLE(state, title) {
    state.title = title;
  }
};

export const actions = {};
