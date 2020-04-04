<template>
  <div>
    <Loading :active.sync="isLoading" />
    <header>
      <Navbar>
        <template v-if="$route.path !== '/'">
          <div class="d-flex justify-content-between w-100">
            <a class="text-white" href="#" @click.prevent="$router.back()">BACK</a>
            <h2 class="h5 text-white mb-0 px-3 text-truncate">
              {{ $store.state.Book.book.title }}
            </h2>
            <a
              class="text-white"
              href="#"
              v-if="$route.meta.title === 'book-detail'"
              @click.prevent="openModal('edit')"
              >Edit</a
            >
          </div>
        </template>

        <template>
          <a
            class="d-inline-block text-white"
            href="#"
            :class="{ 'ml-auto': $route.path === '/' }"
            @click.prevent="openModal('new')"
            v-if="$route.path === '/'"
            >New</a
          >
          <Modal ref="modal" />
        </template>

      </Navbar>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

export default {
  computed: {
    isLoading() {
      return this.$store.state.Loading.loading;
    },
  },
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Modal: () => import('@/components/utils/Modal.vue'),
  },
  methods: {
    openModal(type) {
      if (type === 'edit') {
        this.$refs.modal.editBook();
      } else if (type === 'new') {
        this.$refs.modal.newBook();
      }
    },
  },
};
</script>
