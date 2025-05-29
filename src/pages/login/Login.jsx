import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../../utils/api/api"
import { useMutation, useQueryClient } from "react-query"
import { useAppStore } from "../../app/store"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const updateProvideAuth = useAppStore.use.updateProvideAuth()
  const pushToast = useAppStore.use.pushToast()
  
  const queryClient = useQueryClient()
  const querKey = ['currentUser']
  const { isLoading, mutate: logUser, reset, isError, error } = useMutation((data) => login(data), {
    onSuccess: (data) => {
      pushToast({ message: data.message, type: 'success', duration: 3000 })
      updateProvideAuth(true)
      queryClient.invalidateQueries(querKey)
      reset()
      navigate('/', { replace: true })
    },
    onError: (error) => {
      console.error("Error during login:", error)
      alert(error.response.data.message)
    }
  })

  async function handleSubmitConnexion(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    logUser(data)
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return <div className='absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <div className='text-primary text-xl my-4 w-auto'>Logo</div>

    <form onSubmit={handleSubmitConnexion} className="card w-85 bg-base-100 shadow-xl p-6">
      <label className='floating-label my-4'>
        <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Numéro de téléphone' className='input input-xl' />
        <span className='label'>Numéro de téléphone</span>
      </label>

      <label className='floating-label my-4 relative'>
        <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Mot de passe' className='input input-xl pr-14' />
        <div className='absolute inset-y-0 right-3 flex items-center cursor-pointer z-3' onClick={toggleShowPassword}>
          {!showPassword
            ? <span className="icon-[weui--eyes-on-filled] text-primary"></span>
            : <span className="icon-[weui--eyes-off-filled] text-primary"></span>
          }
        </div>
        <span className='label'>Mot de passe</span>
      </label>

      <button className='btn btn-xl btn-primary my-8' type='submit'>
        Connexion
        {isLoading && <span className="loading loading-spinner ml-4"></span>}
      </button>
    </form>
  </div>
}
