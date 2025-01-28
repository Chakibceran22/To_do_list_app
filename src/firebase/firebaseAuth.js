import app from "./firebaseConfig";
import { getAuth, setPersistence, browserLocalPersistence} from "firebase/auth";

const auth  = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });
export default auth;