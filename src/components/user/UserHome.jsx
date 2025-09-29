import { useQuery } from "react-query";
import { useAppStore } from "../../app/store";
import { getAllSessions } from "../../utils/api/api";
import { toBoolean } from "../../utils/helper";
import { useEffect, useState } from "react";
import addIcon from "../../assets/addIcon.svg"

export default function UserHome() {

    const setFabConfig = useAppStore.use.setFabConfig()
    const setFabSearch = useAppStore.use.setFabSearch()
    const [queries, setQueries] = useState({})
    const pushToast = useAppStore.use.pushToast()
    const queryKey = ['sessions']

    let retry = import.meta.env.VITE_RETRY_LIMIT
    if (retry === "false") {
        retry = toBoolean(retry)
    } else {
        retry = parseInt(retry) || 2
    }
    const { isLoading, error, data } = useQuery(queryKey, () => getAllSessions(queries), {
        retry: retry || false
    })
    const sessions = data?.data.sessions || []

    useEffect(() => {
        setFabConfig({
            icon: addIcon,
            onClick: () => alert("Ajouter une session de prière"),
            isVisible: true
        })
        setFabSearch({
            isSearching: false,
            searchType: undefined,
            searchField: null,
            filters: [
                { name: "Status", options: ["active", "completed"] },
                { name: "Status", options: ["active", "completed"] },
                { name: "Status", options: ["active", "completed"] },
            ]
        })
        return () => {
            setFabConfig(null)
            setFabSearch(null)
        }
    }, [])

    if (error) pushToast({ message: error?.response?.data?.message || "An error occured.", type: 'error' })

    return <div className="flex flex-col items-center grow p-4">
        <h2 className="text-xl text-gray-700 pb-10 pt-4 px-4 self-start">Session de prière</h2>

        <div className="container m-auto max-w-130">
            {isLoading
                ? <span className="loading loading-spinner ml-4"></span>
                : <ul className="w-full p-4 rounded-sm text-gray-500">
                    {sessions.map((session, index) => (
                        <>
                            <li
                                key={`${index}1-${session.id}`}
                                className="p-2 my-2 glass bg-white w-full rounded-sm"
                            >
                                {/* {console.log(session)} */}
                                <p className="text-gray-700">{session.description}</p>
                                <p className="mb-2">Statut: {session.status}</p>
                                <p className="mb-2">Sujet: {session.subject.title}</p>
                                <p>{session.location.name} • {session.location.countryName}</p>
                            </li>
                            <li
                                key={`${index}2-${session.id}`}
                                className="p-2 my-2 glass bg-white w-full rounded-sm"
                            >
                                {/* {console.log(session)} */}
                                <p className="text-gray-700">{session.description}</p>
                                <p className="mb-2">Statut: {session.status}</p>
                                <p className="mb-2">Sujet: {session.subject.title}</p>
                                <p>{session.location.name} • {session.location.countryName}</p>
                            </li>
                            <li
                                key={`${index}3-${session.id}`}
                                className="p-2 my-2 glass bg-white w-full rounded-sm"
                            >
                                {/* {console.log(session)} */}
                                <p className="text-gray-700">{session.description}</p>
                                <p className="mb-2">Statut: {session.status}</p>
                                <p className="mb-2">Sujet: {session.subject.title}</p>
                                <p>{session.location.name} • {session.location.countryName}</p>
                            </li>
                            <li
                                key={`${index}4-${session.id}`}
                                className="p-2 my-2 glass bg-white w-full rounded-sm"
                            >
                                {/* {console.log(session)} */}
                                <p className="text-gray-700">{session.description}</p>
                                <p className="mb-2">Statut: {session.status}</p>
                                <p className="mb-2">Sujet: {session.subject.title}</p>
                                <p>{session.location.name} • {session.location.countryName}</p>
                            </li>
                        </>
                    ))}
                </ul>
            }
        </div>
    </div>
}
