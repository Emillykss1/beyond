import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'

const users = {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async createUser({ commit }, { email, password }) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      commit('setUser', userCredential.user);
      return userCredential.user;
    },
    async loginUser({ commit }, { email, password }) {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      commit('setUser', userCredential.user);
      return userCredential.user;
    },
  },
};

export default users;
