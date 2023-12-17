import { useEffect, useState } from "react";
import classes from "./Users.module.css";

const Users = () => {
  const [userInfo, updateTheUserInfo] = useState(null);

  const [isLoading, updateIsLoading] = useState(false);

  useEffect(() => {
    updateIsLoading(true);

    const fetchTheUserData = async () => {
      const request = await fetch("https://randomuser.me/api/");

      try {
        if (!request.ok) {
          throw new Error({
            message: "Couldn't fetch the data!",
            requestStatus: request.status,
            requestStatusText: request.statusText,
          });

          return;
        }

        const { results: response } = await request.json();

        const userInformation = {
          fullName: `${response[0].name.first} ${response[0].name.last}`,
          userName: `@${response[0].login.username}`,
          cellphone: response[0].phone,
          avatar: response[0].picture.large,
        };

        updateTheUserInfo(userInformation);

        updateIsLoading(false);
      } catch (error) {
        updateIsLoading(false);
        console.log(error);
      }
    };

    fetchTheUserData();
  }, []);

  return (
    <>
      {isLoading && <p className={classes["loading-state"]}>Loading...</p>}

      {!isLoading && (
        <section className={classes["users-section"]}>
          <div className={classes["user-info-container"]}>
            <div className={classes["user-picture-section"]}>
              <img
                src={userInfo ? userInfo.avatar : undefined}
                className={classes["user-picture"]}
                alt={"user-avatar"}
              ></img>
            </div>
            <div className={classes["user-major-info"]}>
              <h2 className={classes["name-lastname"]}>
                {userInfo ? userInfo.fullName : undefined}
              </h2>
            </div>
            <div className={classes["user-minor-info"]}>
              <p className={classes["username"]}>
                {userInfo ? userInfo.userName : undefined}
              </p>
              <p className={classes["cell-phone"]}>
                {userInfo ? userInfo.cellphone : undefined}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Users;
