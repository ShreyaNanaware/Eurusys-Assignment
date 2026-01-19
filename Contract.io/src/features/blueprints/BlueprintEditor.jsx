import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion } from 'framer-motion';

const BlueprintEditor = () => {
  const { addBlueprint } = useApp();
  const [name, setName] = useState('');
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `New ${type} Field`,
      x: 10,
      y: fields.length * 60 + 20
    };
    setFields([...fields, newField]);
  };

  const handleSave = () => {
    if (!name) return alert("Enter blueprint name");
    addBlueprint({ name, fields });
    alert("Blueprint saved!");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8">
      <div className="flex justify-between items-center mb-6">
        <input 
          className="text-2xl font-bold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Blueprint Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSave} className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Save Blueprint
        </button>
      </div>

      <div className="flex gap-6">
        <div className="w-48 bg-gray-50 p-4 rounded-xl border border-gray-200 space-y-3">
          <p className="text-sm font-semibold text-gray-500 mb-4">DRAG FIELDS</p>
          {['Text', 'Date', 'Signature', 'Checkbox'].map(type => (
            <button 
              key={type}
              onClick={() => addField(type)}
              className="w-full text-left p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:border-blue-400 hover:text-blue-600 transition"
            >
              + {type}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[500px] bg-white border-2 border-dashed border-gray-200 rounded-2xl relative overflow-hidden p-10">
          {fields.map(field => (
            <div 
              key={field.id}
              className="absolute p-4 bg-blue-50 border border-blue-200 rounded shadow-sm w-64 flex justify-between items-center"
              style={{ top: field.y, left: field.x }}
            >
              <span className="text-sm font-medium">{field.label} ({field.type})</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlueprintEditor;