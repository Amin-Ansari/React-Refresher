export default function Form(props) {
  const {
    formSubmitHandler,
    passwordFunction,
    userNameFunction,
    passwordValue,
    userNameValue,
  } = props;

  return (
    <form onSubmit={formSubmitHandler}>
      <label>Name</label>
      <input
        type={"text"}
        value={userNameValue}
        onChange={(e) => userNameFunction(e.target.value)}
      ></input>
      <label>Password</label>
      <input
        type={"password"}
        value={passwordValue}
        onChange={(e) => passwordFunction(e.target.value)}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
