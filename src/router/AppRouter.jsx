import { Route, Routes } from "react-router-dom"


export const AppRouter = () => {
  return (
    <Routes>

      <Route path="App" element={<App />}/>

    </Routes>
  )
}
