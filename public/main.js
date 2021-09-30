const app = Vue.createApp({
  data() {
    return {
      profiles: [],
      providers: [],
      showModal: true,
    };
  },
  methods: {
    async getProfilesList() {
      try {
        const response = await fetch('/api/profile/');
        if (response.ok) {
          const { profiles } = await response.json();
          this.profiles = profiles;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getProvidersList() {
      try {
        const response = await fetch('/api/provider/');
        if (response.ok) {
          const { providers } = await response.json();
          this.providers = providers;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getProfilesList();
    this.getProvidersList();
  },
});
