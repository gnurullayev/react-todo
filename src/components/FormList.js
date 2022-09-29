import React, { useState } from 'react';

function FormList({addPost,clearList}) {
    const [value,setValue] = useState("Alisher");

    const newPost =  (e) => {
      e.preventDefault()
      
      let obj = {
        id: Date.now(),
        label: value,
      }

      addPost(obj)
      
      setValue("")
    }

    return (
        <>
            <form className="form" onSubmit={newPost}>
              <div className="row gy-3">
                <div className="col-12 col-md-6">
                  <input 
                  className="js-input form-control" 
                  type="text" 
                  placeholder="Malumot kiriting"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  required
                  />
                </div>

                <div className="col-12 col-md-3">        
                  <button 
                  type='submit'
                  className="btn btn-info w-100" 
                  onClick={newPost}
                  >
                    Submit
                  </button>
                </div>

                <div className="col-12 col-md-3">        
                  <button 
                  type='reset'
                  className="btn btn-danger w-100" 
                  onClick = {clearList}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
        </>
    );
}

export default FormList;