"use client";
import { useState } from "react";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  const [numberList, setNumberList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const addToList = () => {
    if (counter > 0) {
      if (!numberList.includes(counter)) {
        setNumberList([...numberList, counter]);
      }
      setCounter(0);
    }
  };

  const toggleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    
    const sorted = [...numberList].sort((a, b) => {
      if (newOrder === "asc") {
        return a - b;
      } else {
        return b - a;
      }
    });
    
    setNumberList(sorted);
  };

  const clearList = () => {
    setNumberList([]);
  };

  const getTotalSum = () => {
    return numberList.reduce((sum, num) => sum + num, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
          My Counter App
        </h1>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Counter</h2>
          
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-blue-600">{counter}</span>
          </div>
          
          <div className="flex justify-center gap-3 mb-4">
            <button
              onClick={decrement}
              disabled={counter === 0}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              -
            </button>
            
            <button
              onClick={increment}
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              +
            </button>
          </div>
          
          <div className="text-center">
            <button
              onClick={addToList}
              disabled={counter === 0}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Add to List
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              My Numbers ({numberList.length})
            </h2>
            
            <div className="flex gap-2">
              <button
                onClick={toggleSort}
                disabled={numberList.length === 0}
                className="px-3 py-1 bg-purple-500 text-white text-sm rounded-md hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Sort {sortOrder === "asc" ? "↑" : "↓"}
              </button>
              
              <button
                onClick={clearList}
                disabled={numberList.length === 0}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
          
          {numberList.length === 0 ? (
            <div className="text-gray-500 text-center py-4 italic">
              <p>Add some numbers to get started!</p>
            </div>
          ) : (
            <div>
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {numberList.map((number, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center bg-white px-3 py-2 rounded-md border hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-700">{number}</span>
                    <span className="text-xs text-gray-400">#{idx + 1}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-3 text-sm text-gray-600 text-center">
                Sorted: {sortOrder === "asc" ? "Low to High" : "High to Low"}
              </div>
            </div>
          )}
        </div>

        {numberList.length > 0 && (
          <div className="mt-4 bg-green-50 rounded-lg p-4 text-center">
            <span className="text-gray-700">Total Sum: </span>
            <span className="text-green-600 font-bold text-lg">
              {getTotalSum()}
            </span>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-400 text-center">
          <p>Counter won't go below 0 and duplicates are ignored</p>
        </div>
      </div>
    </div>
  );
}
