import Card from "@/components/Card"
import Button from "@/components/Button"
import React from "react"
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />

            <div className="p-4">
        <h2 className="text-2xl font-bold my-4">Button Component Instances</h2>

        {/* Small Buttons */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Small Buttons</h3>
          <Button title="Small" styles="bg-blue-500 hover:bg-blue-700 text-sm rounded-sm" />
          <Button title="Small" styles="bg-green-500 hover:bg-green-700 text-sm rounded-md ml-2" />
          <Button title="Small" styles="bg-red-500 hover:bg-red-700 text-sm rounded-full ml-2" />
        </div>

        {/* Medium Buttons */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Medium Buttons</h3>
          <Button title="Medium" styles="bg-blue-500 hover:bg-blue-700 text-base rounded-sm" />
          <Button title="Medium" styles="bg-green-500 hover:bg-green-700 text-base rounded-md ml-2" />
          <Button title="Medium" styles="bg-red-500 hover:bg-red-700 text-base rounded-full ml-2" />
        </div>

        {/* Large Buttons */}
        <div>
          <h3 className="text-lg font-semibold">Large Buttons</h3>
          <Button title="Large" styles="bg-blue-500 hover:bg-blue-700 text-lg rounded-lg" />
          <Button title="Large" styles="bg-green-500 hover:bg-green-700 text-lg rounded-lg ml-2" />
          <Button title="Large" styles="bg-red-500 hover:bg-red-700 text-lg rounded-full ml-2" />
        </div>
      </div>
        </div>
    )
}

export default Landing; 
