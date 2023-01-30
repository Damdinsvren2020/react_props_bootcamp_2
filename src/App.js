import React from "react";
import "./App.css";
// import Product from "./components/product";
// import ProductData from "./json/Product";
import Text from "./components/text";

function App() {
  // component gedeg n project buyu web site
  // iin hesgvvd ym hesgvvd niilj 1 vndsen web site boldog
  // engiineer App.js file n barilgiin eh heseg
  // component uud n barilgiin toosgo ym
  return (
    <div className="App">
      {/* <div>
        {ProductData.map((Demo) => (
          <Product
            key={Demo.id}
            name={Demo.name}
            description={Demo.description}
            image={Demo.image}
            price={Demo.price}
          />
        ))}
      </div> */}
      <div className="mt-[10px]">
        <Text title="Гарчиг" />
      </div>
    </div>
  );
}

export default App;
