import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onCreate(title);
    setTitle(''); // Clear the input after submitting
    
  };

  return (

    <>
    <div className="book-create">
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" value={title} onChange={changeTitle} />
        <button className="button" type="submit">Create</button>
      </form>
      </div>
    </>
  );
};

export default BookCreate;
