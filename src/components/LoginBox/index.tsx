import styles from "./styles.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { VscGithubInverted } from "react-icons/vsc";

export function LoginBox() {

  const { signInUrl } = useContext(AuthContext);
  
  return(
    <div className={styles.loginBoxWrapper}>
      <strong>Entrar e compartilhe a sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        < VscGithubInverted size="25" />
        Entrar com github
      </a>
    </div>
  )
};