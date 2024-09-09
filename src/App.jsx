import { Canvas } from "@react-three/fiber"
import "./style.css"
import { Environment, ScrollControls } from "@react-three/drei"
import MacContainer from "./MacContainer" // Import the MacContainer component
import { div } from "three/webgpu"

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2 font-['Helvetica_Now_Display']">
      <h3 className=" masked-text text-7xl tracking-tighter font-[700]">macbook pro.</h3>
      <h5>Oh so pro! </h5>
      <p className="text-center w-3/4"> Lorem ipsum dolor nditiis debitis sit voluptas voluptatibus veniam!</p>
      </div>
  <Canvas camera={ {fov:20, position:[0, -10 , 160] }}> 
    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}/>
    <ScrollControls pages ={3 }>
    <MacContainer/>
    </ScrollControls>
  
  </Canvas>
  </div>
  )
}

export default App