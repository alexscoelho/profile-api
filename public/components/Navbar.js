app.component('navbar', {
  template:
    /*html*/
    `
    <ul>
        <li><a href="#home">Clients</a></li>
        <li style="float:right">
            <a class="active"
            id="show-modal" 
            @click="showModal = true"
            >New Client</a>
        </li>
    </ul>
    `,
});
