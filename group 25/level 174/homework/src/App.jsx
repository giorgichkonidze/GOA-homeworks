import Button from "./Button"

function App() {
  return (
    <div className='div1'>
      <div className='bg-gray-900'>

      </div>
      <div className='bg-gray-800 '>
        <img src='../src/assets/avatar-jessica.jpeg' />
        <h1>Jessica Randal</h1>
        <h3>London United Kingdom</h3>
        <h4>"Front-end developer and avid reader."</h4>
        <Button name="GitHub" />
        <Button name="Fronted Mentor" />
        <Button name="Linkedin" />
        <Button name="Twitter" />
        <Button name="Instagram" />
      </div>
    </div>
  )
}

export default App





// - Green: hsl(75, 94%, 57%)

// - White: hsl(0, 0%, 100%)

// - Grey 700: hsl(0, 0%, 20%)
// - Grey 800: hsl(0, 0%, 12%)
// - Grey 900: hsl(0, 0%, 8%)