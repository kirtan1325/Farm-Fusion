import { useState } from "react";

// const initialCrops = [
//   { id: 1, name: "Wheat", quantity: "100", unit: "Kg", price: "2000" },
//   { id: 2, name: "Rice", quantity: "80", unit: "Kg", price: "1600" },
//   { id: 3, name: "Cotton", quantity: "60", unit: "Kg", price: "3000" },
//   { id: 4, name: "Maize", quantity: "120", unit: "Kg", price: "1800" },
//   { id: 5, name: "Sugarcane", quantity: "200", unit: "Kg", price: "2500" },
// ];

export default function FarmFusionDashboard() {
  const [crops, setCrops] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [deletingId, setDeletingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddCrop = () => {
    if (!form.name.trim() || !form.quantity.trim() || !form.price.trim()) return;
    const newCrop = {
      id: Date.now(),
      name: form.name.trim(),
      quantity: form.quantity.trim(),
      unit: "Kg",
      price: form.price.trim(),
    };
    setCrops([...crops, newCrop]);
    setForm({ name: "", quantity: "", price: "" });
  };

  const handleDelete = (id) => {
    setDeletingId(id);
    setTimeout(() => {
      setCrops(crops.filter((c) => c.id !== id));
      setDeletingId(null);
    }, 300);
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #5a7a1a 0%, #6b8e23 40%, #556b2f 100%)" }}
    >
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌾</span>
          <span className="text-white font-bold text-lg tracking-tight">Farm Fusion</span>
          <span className="text-green-200 text-sm hidden sm:inline">| Farm Fusion Dashboard</span>
        </div>
        <button
          className="bg-white text-black text-sm px-4 py-1.5 rounded hover:bg-white hover:text-green-800 transition-colors duration-200"
          onClick={() => alert("Logged out")}
        >
          Log out
        </button>
      </nav>

      <main className="max-w-xl mx-auto px-4 sm:px-6 pb-12 pt-6">
        <div
          className="rounded-2xl p-6 sm:p-8 mb-10 shadow-lg"
          style={{
            background: "rgba(60, 80, 20, 0.55)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-white font-semibold text-lg mb-5">AddCrop :</h2>

          <div className="flex flex-col gap-3 max-w-xs">
  
            <input
              type="text"
              name="name"
              placeholder="Crop Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-full text-sm text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-400 transition"
              style={{ background: "#eee" }}
            />
    
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={form.quantity >= 0? form.quantity : 0}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-full text-sm text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-400 transition"
              style={{ background: "#eee" }}
            />
          
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-full text-sm text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-400 transition"
              style={{ background: "#eee" }}
            />

      
            <button
              onClick={handleAddCrop}
              className="mt-2 self-start px-6 py-2 rounded-full text-sm font-semibold text-gray-800 hover:brightness-110 active:scale-95 transition-all duration-150 shadow"
              style={{ background: "#c8d898" }}
            >
              Add Crop
            </button>
          </div>
        </div>

      
        <div>
          <h2
            className="text-base font-bold mb-3"
            style={{ color: "#d4ef7a" }}
          >
            Your Crops:
          </h2>

         
          <div
            className="grid grid-cols-4 gap-2 text-white text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-t-lg"
            style={{ background: "#4a6741" }}
          >
            <span>Crop Name</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
            <span className="text-center">Action</span>
          </div>

          
          <div className="flex flex-col">
            {crops.map((crop, idx) => (
              <div
                key={crop.id}
                className={`grid grid-cols-4 gap-2 items-center px-3 py-2.5 text-xs sm:text-sm transition-all duration-300 ${
                  deletingId === crop.id ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
                style={{
                  background: idx % 2 === 0 ? "#7a9e4a" : "#6b8e3d",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: idx === crops.length - 1 ? "0 0 10px 10px" : "0",
                }}
              >
      
                <span className="text-white font-medium truncate">{crop.name}</span>
             
                <span className="text-white text-center">
                  {crop.quantity} {crop.unit}
                </span>

                <span className="text-white text-center">₹{crop.price}</span>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleDelete(crop.id)}
                    className="px-3 py-1 rounded-full text-white text-xs font-semibold shadow hover:brightness-110 active:scale-90 transition-all duration-150"
                    style={{ background: "linear-gradient(135deg, #e53e3e, #c53030)" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

    
            {crops.length === 0 && (
              <div
                className="text-center text-green-200 text-sm py-8 rounded-b-lg"
                style={{ background: "#4a6741" }}
              >
                No crops added yet. Add one above!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
