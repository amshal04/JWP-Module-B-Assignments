// import React from 'react'

// const Input = ({label, Textvalue}) => {
//   return (
//     <>
//     <div>
//       <label>{label}</label>
//       <input onChange={Textvalue} className='m-5 w-25' type='text' />
//     </div>
//     </>
//   )
// }

// export default Input



import React from 'react'

const Input = ({label, Textvalue, valueKey}) => {
  return (
    <div className='m-5'>
      <label className='form-label'>{label}</label>
      <input
      value={valueKey}
      onChange={Textvalue}
      className='form-control w-25'
      type='text' 
      />
    </div>
  );
};

export default Input;
