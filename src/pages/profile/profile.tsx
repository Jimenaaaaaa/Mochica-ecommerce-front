import { useMemo } from "react";
import { useUsers } from "../../hooks/use.users";
import { UserRepo } from "../../services/users/users.api.repo";
import styles from "./profile.module.scss";

export default function Profile() {
  const repo = useMemo(() => new UserRepo(), []);
  const { users } = useUsers(repo);

  const person = users.loggedUser.user;

  return (
    <div className={styles.general_container}>
      <div className={styles.profile_container}>
        <div className={styles.options}>
          <div className={styles.options_general}>
            <p>General</p>
          </div>
          <div className={styles.options_2}>
            <p className={styles.options_adress}>Adress</p>
            <p className={styles.options_payment}>Payment</p>
          </div>
        </div>
        <div className={styles.options_profile}>
          <h2>MY PROFILE</h2>
          <button className={styles.edit}>EDIT</button>
        </div>
        <div className={styles.options_bottom_options}>
          <p className={styles.options_welcome}>Hello {person.name}</p>
          <p className={styles.options_title}>Name:</p>
          <div className={styles.options_answer}>
            <p>{person.name}</p>
          </div>
          <p className={styles.options_title}>Last Name:</p>
          <div className={styles.options_answer}>
            <p>{person.lastName}</p>
          </div>
          <p className={styles.options_title}>Email:</p>
          <div className={styles.options_answer}>
            <p>{person.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
