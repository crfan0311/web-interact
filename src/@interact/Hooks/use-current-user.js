import { auth, db} from "@jumbo/services/auth/firebase/firebase";
import { fetchUserByUid } from "../../firebase";
import { useEffect, useState } from "react";
import { doc, query, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const useCurrentUser = () => {
  const [authUser, loading, error] = useAuthState(auth);
  const [user, setUser] = useState();

  const handleFetchUserByUID = async () => {
    const defaultUser = await fetchUserByUid(authUser.uid);
    if(defaultUser) {
      setUser(defaultUser);
      const userListener = onSnapshot(query(doc(db, "users", defaultUser.id)), (querySnapshot) => {
        let userData = querySnapshot.data();
        const id = querySnapshot.id;
        setUser({ ...userData, id });
      });
    }
  }

  useEffect(() => {
    if (authUser) handleFetchUserByUID()
  }, [authUser])
  
  return { user }
}

export default useCurrentUser;