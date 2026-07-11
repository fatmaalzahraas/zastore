import { Footer, Header } from "@/components/common"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="container-custom flex flex-col h-screen">
      <Header />
        <div className="mt-6">
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default MainLayout