import React from "react";

export default function Team() {
  return (
    <div className="bg-base-100 rounded-2xl p-5 shadow-sm">
      {/* header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">Products</h2>
        <button className="btn btn-xs btn-outline border-green-800 text-green-800 rounded-full">
          + New
        </button>
      </div>

      {/* list */}
      <div className="space-y-4">
        {[1,2,3,4].map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-between items-center pb-3"
            >
              <div>
                <h4 className="font-semibold">Hello{product.name}</h4>
                {/* <p className="text-sm text-base-content/60">
                  Price: ${product.price} | Sales: {product.sales}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
