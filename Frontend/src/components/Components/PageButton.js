import { useAuth0 } from "@auth0/auth0-react";
import "./PageButton.css";

function PageButton(props) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button
      className={props.className}
      onClick={() => {
        props.onClick();
      }}
      hideButton={props.hideButton}
      hidden={props.hidden}
    >
      {props.text}
    </button>
  ) : (
    <div></div>
  );
}

export default PageButton;
