import "./styles/index.css";
import { fieldContainer } from "./variables/elements.ts";
import PlayField from "./objects/play_field/play_feld.ts";
import { rows_collumns } from "./variables/settings.ts";

const playField =
  fieldContainer !== null ? new PlayField({ container: fieldContainer }) : null;
playField?.makeNewField(rows_collumns);
