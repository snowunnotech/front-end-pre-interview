export default function({ route, store }) {
  const features = route.meta[0].navbar.features || {};
  store.commit("navbar/FEATURES", features);
  const title = route.meta[0].navbar.title || "";
  store.commit("navbar/TITLE", title);
}
