import { useEffect } from "react"

export function usePageTitle(title) {
    useEffect(() => {
        const previousTitle = document.title
        document.title = title + " - Sentinelle Project"

        return () => document.title = previousTitle
    }, [title])
}
