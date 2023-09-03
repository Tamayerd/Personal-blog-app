
import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(1); 
  const cards = [];
  
  const increment = () => {
    setCount(count + 1);
  };

  for (let i = 0; i < count; i++) {
    cards.push(
        <>
     <div className="flex justify-center items-center ">
  <div className="flex flex-col items-center">
   
      <div key={i} className="flex items-center w-96">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/piri-piri-chicken-with-smashed-sweet-potatoes-broccoli-84cb220.jpg?quality=90&webp=true&resize=93,84"
          alt="Card Image"
          className="w-40 h-40 object-cover rounded-l-lg"
        />
        <div
          className="ml-4 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          style={{ width: '18rem' }}
        >
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Special title treatment
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Serve up an easy one-pan traybake of piri-piri chicken with sweet potatoes and broccoli. As well as being simple to make, it delivers three of your 5-a-day
            </p>
          </div>
        </div>
      </div>
    
    <hr className="my-8 w-full"/>
  </div>
</div>

      </>
    );
  }


  return (
    <div className="card-container">
      <div>
        {cards}
      </div>
      <div className="counter">
        <button onClick={increment} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
  New !
</button>

      </div>
    </div>
  );
}
export default App;
