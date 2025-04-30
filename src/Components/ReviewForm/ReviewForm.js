import React, { useState } from 'react';
import './ReviewForm.css'; // Importing the CSS file for styling

const ReviewForm = () => {
  const [reviews, setReviews] = useState([
    { id: 1, doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiology', feedback: '', isFeedbackEditing: false },
    { id: 2, doctorName: 'Dr. Jane Smith', doctorSpeciality: 'Dermatology', feedback: '', isFeedbackEditing: false },
  ]);
  
  const [feedback, setFeedback] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  const handleSubmitFeedback = (doctorId) => {
    if (feedback) {
      setReviews(reviews.map(review =>
        review.id === doctorId
          ? { ...review, feedback: feedback, isFeedbackEditing: false }
          : review
      ));
      setFeedback('');  // Clear the textarea after submitting feedback
      setSelectedDoctorId(null); // Close feedback form after submitting
    }
  };

  const handleAddFeedbackClick = (doctorId) => {
    setSelectedDoctorId(doctorId); // Show the feedback form for this specific doctor
    setFeedback(''); // Clear previous feedback when editing
  };

  return (
    <div className="review-container">
      <h3>Doctor Reviews</h3>
      <table className="review-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Doctor Name</th>
            <th>Specialty</th>
            <th>Review Given </th>
            <th>Provide feedback</th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <tr key={review.id}>
                <td>{index + 1}</td>
                <td>{review.doctorName}</td>
                <td>{review.doctorSpeciality}</td>
                <td>
                  {review.feedback ? (
                    <p>{review.feedback}</p> // Display feedback if it exists
                  ) : (
                    selectedDoctorId === review.id && (
                      <textarea
                        className="feedback-textarea"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Write your feedback here"
                        rows="4"
                      />
                    )
                  )}
                </td>
                <td>
                  {review.feedback ? (
                    <button className="submit-feedback-btn" disabled>
                      Feedback Submitted
                    </button> // Disable the submit button after feedback is submitted
                  ) : (
                    selectedDoctorId === review.id ? (
                      <button className="submit-feedback-btn" onClick={() => handleSubmitFeedback(review.id)}>
                        Submit Feedback
                      </button>
                    ) : (
                      <button className="add-feedback-btn" onClick={() => handleAddFeedbackClick(review.id)}>
                        Give Feedback
                      </button>
                    )
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No reviews available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;
