import { createApp } from 'vue';
import App from './App.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Menubar from 'primevue/menubar';

const app = createApp( App );

app.component( 'Button', Button );
app.component( 'Calendar', Calendar );
app.component( 'InputText', InputText );
app.component( 'RadioButton', RadioButton );
app.component( 'Menubar', Menubar );

app.mount( '#app' );
