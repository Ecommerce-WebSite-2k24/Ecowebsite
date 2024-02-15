import React from 'react';

function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product: Havic HV G-92 Gamepad</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gamepad Image */}
        <div className="relative">
          <img src="path_to_gamepad_image" alt="Gamepad" className="w-full" />
          {/* Additional elements */}
          <div className="absolute top-0 left-0 p-2 bg-black text-white">New Arrival</div>
        </div>
        {/* PlayStation 5 Controller Skin Image */}
        <div className="relative">
          <img src="path_to_ps5_controller_skin_image" alt="PS5 Controller Skin" className="w-full" />
          {/* Additional elements */}
          <div className="absolute bottom-0 right-0 p-2 bg-black text-white">Limited Edition</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
