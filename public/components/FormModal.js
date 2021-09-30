app.component('form-modal', {
  props: {
    providers: {
      type: Array,
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
                <form>
                  <label for="fname">Name</label>
                  <input type="text" id="fname" name="firstname">

                  <label for="email">Email</label>
                  <input type="email" id="email" name="email">

                  <label for="phone">Phone</label>
                  <input type="text" id="phone" name="phone">

                  
                  <label for="providers">Providers</label>
                  <input type="text" id="providers" name="providers">

                    <div class="checkbox-list-box">
                      <div  v-for="provider in providers" :key="provider.id">
                        <input type="checkbox" id="provider.name" name="provider.name" value="provider.name">
                        <label for="provider.name"> {{provider.name}}</label><br>
                      </div>
                    </div>
                    
                  
                  

                  <input type="button" value="Add Provider">

                 

                </form>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <input type="button" value="Cancel">
                  <input type="submit" value="Add Client">
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
      `,
});
