import { Admin, CustomRoutes, ListGuesser } from "react-admin";
import { Route } from "react-router-dom";
import { createTrailbaseProvider } from "./ra-trailbase";
import { CreateUser, LoginPage } from "./create_user";


const TRAILBASE_URL = "http://supreme-fishstick-5gqxvgvxwgvvfvrgv-4000.app.github.dev/";
const { dataProvider, authProvider } = await createTrailbaseProvider(
  TRAILBASE_URL,
);

function App() {
  return (
    <Admin loginPage={LoginPage} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name= "assignments" list= {ListGuesser} />
      <CustomRoutes noLayout>
        <Route path="/create-user" element={<CreateUser />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
