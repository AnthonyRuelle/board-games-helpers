import { createApp } from 'vue';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Fieldset from 'primevue/fieldset';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeicons/primeicons.css';

import './registerServiceWorker';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);

app.use(router);

app.use(PrimeVue);
app.component('Card', Card);
app.component('InputNumber', InputNumber);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Fieldset', Fieldset);

app.mount('#app');
