
import Chai from './chai'

function App() {
  
  const username = "chai our code"

  return (
    // we passed only single element, with in the single element we can put multiple element
    // here empty element React called this element fragment
    // {for variable use } evaluated variable accept here (evaluated expression)
    <> 
   < Chai/>
   <h2>React in vite to creat a project {username}</h2>  
   <h1>hello rajan you created a project successfully</h1>
   </>
  )
}

export default App
