import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  console.log(contact.id);

  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {}
        </p>
      </div>
      <button className={css.btnDelete}>Delete</button>
    </>
  );
}
