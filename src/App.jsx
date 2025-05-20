import { useState } from 'react';
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmitConnexion(e) {
    e.preventDefault()
    const formData = new FormData(e.target)

    console.log(formData.get('phoneNumber'))
    console.log(formData.get('password'))
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <div className='container flex justify-center items-center flex-col'>
      <div className='text'>Logo</div>

      <form onSubmit={handleSubmitConnexion} className="card w-70">
        <label className='floating-label my-4'>
          <input type="text text-xl" name="phoneNumber" id="phoneNumber" placeholder='Numéro de téléphone' className='input input-xl' />
          <span className='label'>Numéro de téléphone</span>
        </label>

        <label className='floating-label my-4 relative'>
          <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder='Mot de passe' className='input input-xl' />
          <div className='absolute cursor-pointer' onClick={toggleShowPassword}>Oeil</div>
          <span className='label'>Mot de passe</span>
        </label>

        <button className='btn btn-xl btn-primary my-8' type='submit'>Connexion</button>
      </form>
    </div>
  )
}

export default App
