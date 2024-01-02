const shallowObjClone = require("./shallowObjClone");

test("Create a clone of the object parameter", () => {
  const myObj = {
    person: "Shubham",
    number: 23,
  };
  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
