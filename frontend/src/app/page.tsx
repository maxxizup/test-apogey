import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import s from "./page.module.css"


export const App = () => {
    return (
        <div className={s.App}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;