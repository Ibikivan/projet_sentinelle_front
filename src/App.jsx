import './App.css'

function App() {

  return (
    <div className='p-6'>
      <label className='floating-label my-4'>
        <input type="text" name="type_here" id="type_here" placeholder='Tapez ici' className='input' />
        <span className='label'>Tapez ici</span>
      </label>

      <button className='btn btn-primary'>C'est noté</button>
    </div>
  )
}

export default App
