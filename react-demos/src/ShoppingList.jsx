import { useState } from "react";
function ShoppingList() {
  const [shop, setShop] = useState([
    { name: "phone", quantity: 2 },
    { name: "bottle", quantity: 4 },
  ]);

  const [item, setItem] = useState("");
  const [quant, setQuant] = useState("");

  const UpdateList = () => {
    if (item.trim() === "" || quant === "") return;
    setShop([
      ...shop,
      {
        name: item,
        quantity: Number(quant),
      },
    ]);
    setItem("");
    setQuant("");
  };

  return (
    <>
      <div>
        <h1>Your Shopping List</h1>
        <ul>
          {shop.map((s, index) => (
            <li key={index}>
              {s.name} - {s.quantity}
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={item}
          placeholder="Type an Item"
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="text"
          value={quant}
          placeholder="Enter the quantity"
          onChange={(e) => setQuant(e.target.value)}
        />

        <button onClick={UpdateList}>Add to shopping list</button>
      </div>
    </>
  );
}
export default ShoppingList;
