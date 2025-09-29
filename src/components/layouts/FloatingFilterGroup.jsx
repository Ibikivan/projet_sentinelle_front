import { AnimatePresence, motion } from "motion/react"
import { useAppStore } from "../../app/store"

const joinVariant = {
    open: { y: 0, opacity: 1, pointerEvents: 'auto', transition: { duration: 0.2 } },
    closed: { y: -20, opacity: 0, pointerEvents: 'none', transition: { duration: 0.1 } }
}

const backgroundVariant = {
    open: { opacity: .3, transition: { duration: 0.2 } },
    closed: { opacity: 0, transition: { duration: 0.1 } }
}

export default function FloatingFilterGroup() {
    const fabSearch = useAppStore.use.fabSearch()
    const setFabSearch = useAppStore.use.setFabSearch()
    const fabConfig = useAppStore.use.fabConfig()
    const setFabConfig = useAppStore.use.setFabConfig()

    function closeSearch() {
        if (fabSearch?.isSearching) {
            setFabSearch({ ...fabSearch, isSearching: false })

            if (fabConfig)
                setFabConfig({ ...fabConfig, isVisible: true })
        }
    }

    function handleCloseButtonClick(e) {
        e.preventDefault()
        closeSearch()
    }

    return <div className="relative min-w-full flex justify-center">
        <AnimatePresence>
            {fabSearch?.isSearching && <motion.div
                className={`w-screen h-screen fixed z-2 bg-gray-400 opacity-30`}
                onClick={closeSearch}
                initial="closed"
                animate={"open"}
                exit={"closed"}
                variants={backgroundVariant}
            />}
        </AnimatePresence>
        <AnimatePresence>
            {fabSearch?.isSearching && <motion.form
                className={`${!fabSearch?.isSearching && 'hidden'} join fixed top-17 sm:top-30 z-2`}
                initial="closed"
                animate={"open"}
                exit={"closed"}
                variants={joinVariant}
            >
                <div className="shrink-0">
                    <div>
                        <input className="input join-item" placeholder="Search" />
                    </div>
                </div>
                <select className="select join-item">
                    <option disabled selected>Filter</option>
                    <option>Sci-fi</option>
                    <option>Drama</option>
                    <option>Action</option>
                </select>
                <div className="indicator">
                    <button
                        className="btn join-item"
                        type="submit"
                        onClick={handleCloseButtonClick}
                    >Fermer</button>
                </div>
            </motion.form>}
        </AnimatePresence>
    </div>
}