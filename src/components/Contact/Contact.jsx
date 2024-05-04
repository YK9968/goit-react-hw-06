import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ contact: { id, info } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>
          <FaUser className={css.iconContact} />
          {info.name}
        </p>
        <p>
          <FaPhoneAlt className={css.iconContact} />
          {info.number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
        className={css.btnDelete}
      >
        Delete
      </button>
    </>
  );
}
