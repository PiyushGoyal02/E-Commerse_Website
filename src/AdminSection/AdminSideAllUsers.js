import "../AdminSectionCSS/AdminSideAllUsersCSS.css";

function AdminSideAllUsers() {
  const users = [
    {
      name: "Piyush",
      surname: "Goyal",
      address: "Main Bazar Tehsil Chowk",
      pincode: "125050",
      number: "968574xxxx",
      country: "India",
      state: "Haryana",
      email: "piyush123@gmail.com",
    },
    {
      name: "joy",
      surname: "joy",
      address: "Rajendra Nagar, Sector 5",
      pincode: "110060",
      number: "987654xxxx",
      country: "India",
      state: "Delhi",
      email: "joy.joy@example.com",
    },
    {
      name: "Ankit",
      surname: "Sharma",
      address: "MG Road, Near Metro Station",
      pincode: "741258",
      number: "912345xxxx",
      country: "India",
      state: "Karnataka",
      email: "ankit.sharma@gmail.com",
    },
    {
      name: "Cio",
      surname: "Patel",
      address: "Satellite Area, Ahmedabad",
      pincode: "458741",
      number: "998877xxxx",
      country: "India",
      state: "Gujarat",
      email: "cio.patel@outlook.com",
    },
  ];

  return (
      <div>
        <h2 className="AllUserstext">All User's</h2>
        <div className="admin-main">
            <div className="admin-user-list">
                {users.map((user, index) => (
                <div className="user-card" key={index}>
                    <div className="user-icon">👤</div>
                    <div className="user-details">
                    <h3>{user.name} {user.surname}</h3>
                    <p>{user.address}, {user.state}, {user.pincode}</p>
                    <p>{user.country}</p>
                    <p>📞 {user.number}</p>
                    <p>✉️ {user.email}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
      </div>
  );
}

export default AdminSideAllUsers;
