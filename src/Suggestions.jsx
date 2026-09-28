import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
    .then(data => {
      return data.json();
    })
    .then(data => {
      // console.log(data);
      setSuggestions(data);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])
  return (
    <div className='w-75 p-3'>
      <div className='d-flex'>
        <img src="src\assets\profile.png" alt="" className='dp'/>
        <h6 className='mt-2'>meee</h6>
        <p className='ms-auto mt-2'>Switch</p>
      </div>
      <div className='d-flex'>
        <p>Suggestions</p>
        <b className='ms-auto'>See All</b>
      </div>
      <div>
        {suggestions.length > 0 ?
        <div>
          {suggestions.map(suggestion => (
            <div key = {suggestion.id} className='d-flex'>
              <img src={suggestion.user.profileImage} className='dp' alt="" />
              <p className='mt-2'>{suggestion.user.username}</p>
              <p className='ms-auto mt-2 text-primary'>Follow</p>
              {/* hi */}
            </div>
          ))
          }
        </div>
        :
        <div>
          <p>Loading...</p>
        </div>
        }
      </div>
    </div>
  )
}

export default Suggestions
