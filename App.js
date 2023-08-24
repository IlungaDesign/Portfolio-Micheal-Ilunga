import './App.css';
import {Switch, Route} from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Music from "./Links/Music/Music";
import PageFitness from "./Links/PageFitness/PageFitness";
import PagePixam2 from "./Links/PagePixam2/PagePixam2";
import ContactMusic from "./Components/ContactMusic/ContactMusic";
import UrbanVisionTrackList from "./Links/UrbanVisionTrackList/UrbanVisionTrackList";
import EmptyPage from "./Pages/EmptyPage/EmptyPage";
import CvDownload from "./Pages/CvDownload/CvDownload";
import ContactConfirmedPage from "./Pages/ContactConfirmedPage/ContactConfirmedPage";


function App() {
  return (

      <Switch>
        {/*--------------PAGES----------------------*/}
        <Route exact path="/" >
          <WelcomePage/>
        </Route>
        <Route path="/PagePixam2">
          <PagePixam2/>
        </Route>
        <Route path="/PageFitness">
          <PageFitness/>
        </Route>
        <Route path="/ContactMusic">
          <ContactMusic/>
        </Route>
        <Route path="/UrbanVisionTrackList">
          <UrbanVisionTrackList/>
        </Route>

        {/*--------------Links----------------------*/}
        <Route path="/Music">
          <Music/>
        </Route>
        <Route path="/EmptyPage">
          <EmptyPage/>
        </Route>
        <Route path="/CvDownload">
          <CvDownload/>
        </Route>
        <Route path="/ContactConfirmedPage" component={() => < ContactConfirmedPage authorized={true}/> }/>

      </Switch>

  );
}

export default App;
