import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Rewards from "./pages/rewards/Rewards";
import Tasks from "./pages/activity/Activity";
import Tab3 from "./pages/historical/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import IconComponent from "./components/atoms/icon";

/* Images for tabs */
import rewardImage from "./assets/svgs/shop.svg";
import activityImage from "./assets/svgs/add-activity.svg";
import archiveImage from "./assets/svgs/archive.svg";
import { iconType } from "./types/iconType";

setupIonicReact();

const rewardIcon: iconType = {
  name: "shop",
  size: 30,
  path: rewardImage,
};

const activityIcon: iconType = {
  name: "activity",
  size: 30,
  path: activityImage,
};

const archiveIcon: iconType = {
  name: "archive",
  size: 30,
  path: archiveImage,
};

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/rewards">
            <Rewards />
          </Route>
          <Route exact path="/activity">
            <Tasks />
          </Route>
          <Route path="/historical">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/activity" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="rewards" href="/rewards">
            <IconComponent
              name={rewardIcon.name}
              size={rewardIcon.size}
              path={rewardIcon.path}
            />
            <IonLabel>Rewards</IonLabel>
          </IonTabButton>
          <IonTabButton tab="activiy" href="/activity">
          <IconComponent
              name={activityIcon.name}
              size={activityIcon.size}
              path={activityIcon.path}
            />
            <IonLabel>Add Activity</IonLabel>
          </IonTabButton>
          <IonTabButton tab="historical" href="/historical">
          <IconComponent
              name={archiveIcon.name}
              size={archiveIcon.size}
              path={archiveIcon.path}
            />
            <IonLabel>History</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
