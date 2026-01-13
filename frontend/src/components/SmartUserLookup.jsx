import { useEffect, useState } from "react";
import "./SmartUserLookup.css";

const SmartUserLookup = () => {
  const [userBucket, setUserBucket] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    const fetchDirectory = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserBucket(data);
      } catch (err) {
        console.error("Failed to load users", err);
      } finally {
        setLoadingState(false);
      }
    };

    fetchDirectory();
  }, []);

  const filteredUsers = userBucket.filter((person) => {
    const text = searchKey.toLowerCase();
    return (
      person.name.toLowerCase().includes(text) ||
      person.email.toLowerCase().includes(text)
    );
  });

  return (
    <div className="lookup-box">
      <h2>User Directory</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />

      {loadingState ? (
        <p className="loading">Loading users...</p>
      ) : (
        <ul>
          {filteredUsers.length === 0 ? (
            <li className="empty">No results found</li>
          ) : (
            filteredUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SmartUserLookup;
