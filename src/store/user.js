import { types } from "mobx-state-tree";

const User = types.model({
  id: types.identifier(types.number),
  name: types.string,
  photoUrl: types.maybe(types.number)
});

export default User;
