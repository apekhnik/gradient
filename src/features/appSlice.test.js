import appReducer, {
  addColorToList,
  deleteColor,
  onFirstColorChange,
  onSecondColorChange,
  editColor,
  disableBtnToogler,
} from "./appSlice";
import uniqid from "uniqid";
let state = {
  newColor: {
    first: "#000000",
    second: "#ffffff",
    id: uniqid(),
  },
  colorList: [
    {
      first: "#905431",
      second: "#abc",
      id: 1,
    },
    {
      first: "#000000",
      second: "#ffffff",
      id: 2,
    },
  ],
  addColorDisable: false,
};
describe(">>>R E D U C E R --- Test app reducer", () => {
  beforeEach(() => {});

  it("first color change", () => {
    const Newstate = appReducer(state, onFirstColorChange("#666666"));
    expect(Newstate.newColor.first).toEqual("#666666");
  });
  it("second color change", () => {
    const Newstate = appReducer(state, onSecondColorChange("#656666"));
    expect(Newstate.newColor.second).toEqual("#656666");
  });
  it("add new color to color list", () => {
    const Newstate = appReducer(
      state,
      addColorToList({
        first: "#666666",
        second: "#656666",
        id: uniqid(),
      })
    );
    expect(Newstate.colorList.length).toEqual(3);
  });
  it("delete color from list", () => {
    const Newstate = appReducer(state, deleteColor(2));
    expect(Newstate.colorList.length).toEqual(1);
  });
  it("edit selected color", () => {
    const Newstate = appReducer(
      state,
      editColor({
        first: "#666666",
        second: "#656666",
        id: 1,
      })
    );
    expect(Newstate.colorList[0].first).toEqual("#666666");
  });
  it("test diasbled button", () => {
    const Newstate = appReducer(state, disableBtnToogler(false));
    expect(Newstate.addColorDisable).toEqual(false);
  });
});
