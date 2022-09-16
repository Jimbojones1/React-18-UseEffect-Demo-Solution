import { useEffect, useState } from "react";
import { userService } from "../utils/user-api";
import { useParams } from "react-router-dom";
export default function UserProfile({ url }) {
  const [profile, setProfile] = useState({});

  const { id } = useParams();

  useEffect(() => {
	const controller = new AbortController()
    async function getProfile() {
      try {

		
        const url = `https://randomuser.me/api/?results=${id}`;
        const profile = await userService.getProfile(url, controller.signal);

        setProfile(profile.results[0]);
      } catch (err) {
        console.log(err);
      }



    }
    getProfile();

	return () => {
		controller.abort()
	}
  }, [id]);

  return <div>{JSON.stringify(profile)}</div>;
}
