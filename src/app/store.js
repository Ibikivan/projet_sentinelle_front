import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const createSelectors = (_store) => {
    let store = _store
    store.use = {}

    for (let k of Object.keys(store.getState())) {
        store.use[k] = () => store((s) => s[k])
    }

    return store
}

export const useAppStore = createSelectors(
    create(persist((set) => {
        return {
            user: null,
            updateUser(user) {
                set({ user: user })
            },
            provideAuth: false,
            updateProvideAuth(status) {
                set({ provideAuth: status })
            },
            redirectPath: null,
            updateRedirectPath(path) {
                set({ redirectPath: path })
            },
            toasts: [
                // { message: "New mail arrived.", type: 'info', duration: 3000 },
                // { message: "Message sent successfully.", type: 'success', duration: 3000 },
            ],
            setToasts(toasts) {
                set({ toast: toasts })
            },
            pushToast(toast) {
                const idToast = {...toast, id: Date.now() + Math.random()} 
                set((state) => ({
                    toasts: [...state.toasts, idToast]
                }))

                if (idToast.duration) {
                    setTimeout(() => {
                        set((state) => ({
                            toasts: state.toasts.filter(t => t !== idToast)
                        }))
                    }, idToast.duration)
                }
            },
            removeToast(toastId) {
                set((state) => ({
                    toasts: state.toasts.filter(t => t.id !== toastId)
                }))
            }
        }
    }, {
        name: "app-store",
        storage: createJSONStorage(() => sessionStorage),
    }))
)

export const globalUpdateUser = (user) => {
    useAppStore.setState({ user: user })
}
