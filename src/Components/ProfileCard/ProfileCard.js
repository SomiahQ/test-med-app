import React, { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-card-container">

    <div className="profile-card">
      {isEditing ? (
        <ProfileEditForm user={user} onSave={handleSave} />
      ) : (
        <>
          <h2>Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
        </>
      )}
    </div>
    </div>

  );
};

// 👇 Nested ProfileEditForm component
const ProfileEditForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-edit-form">
      <h3>Edit Profile</h3>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <button type="submit" className="save-btn">Save </button>
    </form>
  );
};

export default ProfileCard;
