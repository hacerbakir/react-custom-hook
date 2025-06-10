// import React, { useState } from 'react'
import useInput from "../useInput";

function PersonelInfo() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`merhaaba ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div className="Box">
      <form onSubmit={submitForm}>
        <div>
          <label>Ad</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Soyad</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default PersonelInfo;
