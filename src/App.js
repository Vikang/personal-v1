import { Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { BeigeTheme } from "./components/Themes"
import { GlobalStyles } from "./styles"
import SoundBar from "./subComponents/SoundBar";
import Logo from './subComponents/Logo'

import { Home, About, Experience, Skills, Work } from './pages'

function App() {
  return <>
  <GlobalStyles/>
    <ThemeProvider theme = { BeigeTheme }>
    <Logo />
    <SoundBar />
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/about" component={About}/>
        <Route exact path= "/experience" component={Experience}/>
        <Route exact path= "/skills" component={Skills}/>
        <Route exact path= "/work" component={Work}/>
      </Switch>
    </ThemeProvider>

    </>

}

export default App

