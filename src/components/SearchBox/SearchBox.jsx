import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={css.containerSearcBox}>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={(evt) => onSearch(evt.target.value)}
        type="text"
      />
    </div>
  );
}
