// importera fler funktioner med , mellan varje funktion
import { printLayout } from "./modules/printLayout.mjs";

import { CreateView, CreateKanBan} from './Modules/view.mjs';
//Use this function for adding Header and footer
CreateView();


//Use function for creating boards
CreateKanBan();

//Sort function to sort cards
printLayout();