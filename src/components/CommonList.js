import { useGlobalState } from "../utils/stateContext";

export default function CommonList(props) {
  const { store } = useGlobalState();
  const { movies } = store;
  const friendMovieList = props.location.friendProps.name.friendsList;
  let friendTitles = friendMovieList.map(({ title }) => title);
  let userTitles = movies.map(({ title }) => title);
  const commonTitles = friendTitles.filter((value) =>
    userTitles.includes(value)
  );
  console.log(commonTitles);
  return (
    <div>
      <h1>Common List</h1>
      <ul>
        {commonTitles.map((movie) => (
          <li className="dtListItem" key={movie}>
            <span>{movie}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
