text
npm create vite@latest

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
tailwind.config.js file me change
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
index.css file me add
@tailwind base;
@tailwind components;
@tailwind utilities;


# note for currency converter aap
## api link

```javascript
let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

```
## input box
```javascript
function InputBox({
  label,

  className =""
})  {
    
      return(
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
               <label className = "text-black/40 mb-2 inline-block">
                  label
               </label>
               <input
               className = "outline-none w-full bg-transparent py-1.5"
               type="number"
               placeholder="Amount"
               />
            </div>
            <div className = "w-1/2 flex flex-wrap justify-end text-right">
            <p className = "text-block/40 mb-2 w-full ">Currency Type</p>
            <select
            className = "rounded-lg px-1 py-1 bg-gray-100 cursor-pointer"
            >
                  <option value=usd>
                       usd
                  </option>


            </select>

            </div>
        </div>
      );

}

export default InputBox ;

```

## app js

```javascript

function App(){
  return(
    <div 
      className = "w-full h-screen flex flex-wrap justify-center item-center"
      style={{
        backgroundImage: `url(`${BackgroundImage}`)`
      }}
    >

        <div className = 'w-full '>
            <div className = "w-full max-w-md max-auto border border-gray-600">
             
             <form
             onSubmit = {(e) => {
              e.preventDefault();
             }}
             >
                <div className="w-full mb-1">
                <InputBox
                   label= "From"
                />
                </div>
                <div className="relative w-full h-0.5">
                   <button 
                       type="button"
                       className="absolute left-1/2 -translate-x-1/2"
                   >
                   swap
                   </button>
                </div>
                <div className="w-full mt-1 mb-4">
                <InputBox
                   label= "To"
                />
                </div>
                <button type="submit" className="w-full bg-blue-600">
                  Convert
                </button>
             </form>

            </div>

        </div>

    </div>
  );
}
```

