import Button from "./Button";

function App() {
  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-xl flex items-center flex-col justify-center p-10">

        <img src="../src/assets/avatar-jessica.jpeg" className=" h-30 w-30 rounded-full"/>
        <h1 className="text-white text-xl m-1">Jessica Randall</h1>
        <h2 className="text-[#c4f82a] m-2">London, United Kingdom</h2>
        <h3 className="text-white p-4 m-1">"Front-end developer and avid reader."</h3>

        <Button name="GitHub"></Button>
        <Button name="Frontend Mentor"></Button>
        <Button name="Linkedin"></Button>
        <Button name="Twitter"></Button>
        <Button name="Instagram"></Button>
      </div>
    </div>
  )
}

export default App

//- Green: hsl(75, 94%, 57%)

// - White: hsl(0, 0%, 100%)

// - Grey 700: hsl(0, 0%, 20%)
// - Grey 800: hsl(0, 0%, 12%)
// - Grey 900: hsl(0, 0%, 8%)