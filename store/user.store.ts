import { User } from 'types/User.type'
import create from 'zustand'
import { persist } from "zustand/middleware"

const useUserStore = create(persist<{ user: User, addUser: (user: User) => void }>(
  (set) => ({
    user: { email: '', token: '' },
    addUser: (user) => set(() => ({ user })),
  }),
  {
    name: "user-storage",
    getStorage: () => sessionStorage,
  }
))

export { useUserStore }