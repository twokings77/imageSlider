
// export default function Home() {
//   return (
//     <div className="text-4xl font-bold flex items-center justify-center w-full h-screen">
//       <p>Hello  World</p>
//     </div>
//   )
// }
// Example React Component
// pages/index.js
import ImageSlider from '../components/imageSlider'; 

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center max-w-[1440px] mx-auto">
      <ImageSlider />  {}
      <h1 className="text-2xl">Welcome to My First Component</h1>
    </div>
  );
}