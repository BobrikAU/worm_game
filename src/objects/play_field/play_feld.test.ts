import PlayField from "./play_feld.ts";

const container = document.createElement("div");
container.classList.add("mainWindow__field");
const playField = new PlayField({ container });

test("контенер для игрового поля имеется", () => {
  expect(playField.container).toMatchSnapshot();
});

test("создание игрового поля", () => {
  playField.makeNewField(5);
  expect(playField.container).toMatchSnapshot();
});
