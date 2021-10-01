app.component('form-modal', {
  props: {
    providers: {
      type: Array,
      required: true,
    },
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  New Client
                </slot>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">

                  <label for="fname">Name</label>
                  <input type="text" id="fname" v-model="name" name="firstname">

                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email" name="email">

                  <label for="phone">Phone</label>
                  <input type="text" id="phone" v-model="phone" name="phone">

                  <div class="modal-footer">
                    <slot name="footer">
                      <input type="button" value="Cancel">
                      <input type="submit" value="Add Client">
                    </slot>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition>
      `,
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    async createProfile(profile) {
      try {
        const response = await fetch('/api/profile', {
          method: 'POST',
          body: JSON.stringify(profile),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const newProfile = await response.json();
        console.log(newProfile);
      } catch (error) {
        console.log(error);
      }
    },
    onSubmit() {
      if (this.name === '' || this.email === '' || this.phone === '') {
        alert('Please fill out every field');
        return;
      }
      const newProfile = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      this.createProfile(newProfile);
    },
  },
});
