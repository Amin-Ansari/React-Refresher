import classes from "./Users.module.css";

const Users = () => {
  return (
    <section className={classes["users-section"]}>
      <div className={classes["user-info-container"]}>
        <div className={classes["user-picture-section"]}>
          <img
            src=""
            className={classes["user-picture"]}
            alt={"user-avatar"}
          ></img>
        </div>
        <div className={classes["user-major-info"]}>
          <h2 className={classes["name-lastname"]}></h2>
        </div>
        <div className={classes["user-minor-info"]}>
          <p className={classes["username"]}></p>
          <p className={classes["cell-phone"]}></p>
        </div>
      </div>
    </section>
  );
};
