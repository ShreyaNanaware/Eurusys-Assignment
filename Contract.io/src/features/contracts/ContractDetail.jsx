import React from 'react';
import { useApp, CONTRACT_STATUS } from '../../context/AppContext';
import { Badge } from '../../components/ui/Badge';
import { motion } from 'framer-motion';
import { Lock, XCircle, CheckCircle, Send } from 'lucide-react';

const ContractDetail = ({ contract }) => {
  const { updateContractStatus } = useApp();

  const isLocked = contract.status === CONTRACT_STATUS.LOCKED;
  const isRevoked = contract.status === CONTRACT_STATUS.REVOKED;
  const isDisabled = isLocked || isRevoked;

  // Lifecycle Action Config
  const actions = [
    { 
      label: 'Approve', 
      target: CONTRACT_STATUS.APPROVED, 
      icon: <CheckCircle size={18} />, 
      color: 'bg-purple-600',
      show: contract.status === CONTRACT_STATUS.CREATED 
    },
    { 
      label: 'Send to Client', 
      target: CONTRACT_STATUS.SENT, 
      icon: <Send size={18} />, 
      color: 'bg-yellow-600',
      show: contract.status === CONTRACT_STATUS.APPROVED 
    },
    { 
      label: 'Sign Contract', 
      target: CONTRACT_STATUS.SIGNED, 
      icon: <CheckCircle size={18} />, 
      color: 'bg-green-600',
      show: contract.status === CONTRACT_STATUS.SENT 
    },
    { 
      label: 'Finalize & Lock', 
      target: CONTRACT_STATUS.LOCKED, 
      icon: <Lock size={18} />, 
      color: 'bg-gray-800',
      show: contract.status === CONTRACT_STATUS.SIGNED 
    },
    { 
      label: 'Revoke', 
      target: CONTRACT_STATUS.REVOKED, 
      icon: <XCircle size={18} />, 
      color: 'bg-red-600',
      show: [CONTRACT_STATUS.CREATED, CONTRACT_STATUS.SENT].includes(contract.status) 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
    >
      {/* Status Banner */}
      <div className={`p-4 flex justify-between items-center ${isRevoked ? 'bg-red-50' : isLocked ? 'bg-gray-100' : 'bg-blue-50'}`}>
        <div className="flex items-center gap-2">
          {isLocked && <Lock size={16} className="text-gray-500" />}
          <span className="text-sm font-bold uppercase tracking-wider text-gray-600">
            Current Status: {contract.status}
          </span>
        </div>
        <Badge status={contract.status} />
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">{contract.name}</h2>
        
        {/* Form Fields - Disabled if Locked or Revoked */}
        <div className="space-y-6 opacity-100 transition-opacity">
          {contract.fields.map(field => (
            <div key={field.id} className={`${isDisabled ? 'pointer-events-none opacity-60' : ''}`}>
              <label className="block text-sm font-semibold text-gray-500 mb-1">{field.label}</label>
              <div className="p-3 bg-gray-50 border rounded-lg text-gray-800 font-medium">
                {contract.data[field.id] || <span className="text-gray-400 italic">No value provided</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 pt-6 border-t flex flex-wrap gap-3">
          {actions.map(action => action.show && (
            <button
              key={action.target}
              onClick={() => updateContractStatus(contract.id, action.target)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold transition transform hover:scale-105 active:scale-95 ${action.color}`}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
          
          {isDisabled && (
            <p className="text-sm text-gray-400 italic flex items-center gap-2">
              <Lock size={14} /> This contract is {contract.status.toLowerCase()} and cannot be modified.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContractDetail;