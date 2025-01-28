import app from "./firebaseConfig";
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence} from "firebase/auth";

const auth  = getAuth(app);
setPersistence(auth, browserSessionPersistence)
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });
export default auth;