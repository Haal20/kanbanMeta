// importera fler funktioner med , mellan varje funktion
import { printLayout } from "./modules/printLayout.mjs";

printLayout();

import { CreateView, CreateKanBan} from './Modules/view.mjs';
//Use this function for adding Header and footer
CreateView();


//Use function for creating boards
CreateKanBan();
