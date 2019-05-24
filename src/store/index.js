import { types, flow, getSnapshot } from "mobx-state-tree";
import api from "../api";
import User from "./user";
import Game from "./game";

const GameStore = types
  .model({
    game: types.maybe(Game)
  })
  .actions(self => {
    return {
      start(payload) {
        self.game = {
          ...payload,
          createdAt: new Date().toString(),
          updatedAt: new Date().toString()
        };
      },
      reset: () => {
        self.game = null;
      },
      save: flow(function*() {
        api.post("/api/game", getSnapshot(self.game));
      })
    };
  });

const Store = types
  .model({
    users: types.optional(types.array(User), [
      {
        id: 1,
        name: "CMYK Defender",
        photoUrl: require("../assets/CMYK.png")
      },
      {
        id: 2,
        name: "CMYK Forward",
        photoUrl: require("../assets/CMYK.png")
      },
      {
        id: 3,
        name: "RGB Forward",
        photoUrl: require("../assets/RGB.png")
      },
      {
        id: 4,
        name: "RGB Defender",
        photoUrl: require("../assets/RGB.png")
      }
    ]),
    games: types.optional(types.array(Game), []),
    gameStore: GameStore
  })
  .actions(self => {
    return {
      loadUsers: flow(function*(force) {
        const { users } = yield api.get("/api/users");
        self.users = users;
      }),
      loadGames: flow(function*() {
        const { games } = yield api.get("/api/games");
        self.games = games;
      })
    };
  });

export const store = Store.create({
  gameStore: {}
});

export const gameStore = store.gameStore;
