
const UserCard = ({ user, onPromote }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>
        Role: {user.role}
      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => onPromote(user.id)}>
          Promote
        </button>
      </div>
    </div>
  );
};



export default UserCard;