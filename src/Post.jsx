export function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>Author: {props.author}</p>
    </div>
  );
}

// Default exports vs named exports

// Default exports are useful to export only a single object, function, variable. Rename is allowed.
// Named exports are useful to export several values. Renaming is not allowed.