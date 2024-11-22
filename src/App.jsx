import LivePreview from "./components/LivePreview"
import Form from "./components/Form"


const App = () => {
  return (
    <div className="flex justify-center items-center w-full bg-red-200 h-[130vh]">
      <Form/>
      <LivePreview/>
    </div>
  )
}

export default App
