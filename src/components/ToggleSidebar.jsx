import { useAppStore } from "../app/store";
import Button from "./ui/Button";
import { motion } from "motion/react"

const variant = {
    close: { rotate: 180 },
    open: { rotate: 0 }
}

export default function ToggleSidebar({ isOpen, toggleSidebar }) {
    const setFabSearch = useAppStore.use.setFabSearch()
    const fabSearch = useAppStore.use.fabSearch()
    const pushToast = useAppStore.use.pushToast()
    const fabConfig = useAppStore.use.fabConfig()
    const setFabConfig = useAppStore.use.setFabConfig()

    function openSearch(type) {
        if (fabSearch) {
            setFabSearch({
                isSearching: true,
                searchType: type || 'search'
            })
            
            if (fabConfig)
                setFabConfig({ ...fabConfig, isVisible: false })

            // Ajouter un condition js à partir des media queries pour ne pas fermer sur grand écran
            if (window.innerWidth < 640)
                toggleSidebar()
        } else {
            pushToast({ message: "Pas de recherche sur cette page.", type: 'error' })
        }
    }

    return <div className="relative flex grow-0 min-w-full glass py-2 my-4 -mx-4">
        <div className="flex grow-0 min-w-full items-center px-2">
            <Button
                content="Chercher"
                classNames="bg-base-300 rounded-box grid h-10 grow place-items-center"
                onClick={() => openSearch('search')}
                disabled={
                    !fabSearch?.searchField
                    || (fabSearch?.searchType === 'search' && fabSearch?.isSearching)
                }
            />
            <div className="divider divider-horizontal">ou</div>
            <Button
                content="Filtrer"
                classNames="bg-base-300 rounded-box grid h-10 grow place-items-center"
                onClick={() => openSearch('filter')}
                disabled={
                    fabSearch?.filters?.length <= 0
                    || fabSearch?.searchType === 'filter' && fabSearch?.isSearching
                }
            />
        </div>
        <Button
            children={<motion.span
                initial="open"
                variants={variant}
                animate={isOpen ? "open" : "close"}
                className="icon-[line-md--arrow-left]"
            ></motion.span>}
            classNames="sm:hidden absolute -right-1 h-full glass rounded-tl-none rounded-bl-none p-2"
            onClick={toggleSidebar}
        />
    </div>
}