const User = ({ user: { name, username, image } }) => {
  return (
    <>
      <div className="user__info"></div>
      <h3>{name}</h3>
      <h4>{username}</h4>
      <div className="user__image">
        <image
          src={image}
          alt={`Profile picture of ${name}`}
          width="100px"
        ></image>
      </div>
    </>
  );
};

export default User;
