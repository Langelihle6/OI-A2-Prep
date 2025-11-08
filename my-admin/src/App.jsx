import { Admin, CustomRoutes, ListGuesser, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage  } from "./create_user"; 


const TRAILBASE_URL = "http://sturdy-cod-979j676jvvqjf9x7-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
  TRAILBASE_URL,
);

function App() {
  return (
    <Admin loginPage={LoginPage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name= "gear" list= {ListGuesser} />
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
