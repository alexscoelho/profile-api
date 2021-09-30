app.component('profiles-table', {
  props: {
    profiles: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <table id="customers">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Providers</th>
            <th></th>
        </tr>
        <tr v-for="profile in profiles" :key="profile.id">
            <td>{{profile.name}}</td>
            <td>{{profile.email}}</td>
            <td>{{profile.phone}}</td>
            <td>{{showProviders(profile.providers)}}</td>
            <td>Edit</td>
        </tr>
    </table>
    `,
  methods: {
    showProviders(providersArr) {
      return (providersJoined = providersArr
        .map((provider) => provider.name)
        .join());
    },
  },
});
