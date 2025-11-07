import type { ReactNode } from 'react';
import { MdAdd, MdEdit } from 'react-icons/md';

interface FormCardProps {
  children: ReactNode;
  isEditing?: boolean;
}

const FormCard: React.FC<FormCardProps> = ({ children, isEditing = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        {isEditing ? (
          <>
            <MdEdit size={20} className="text-blue-600" />
            Edit Note
          </>
        ) : (
          <>
            <MdAdd size={20} className="text-blue-600" />
            Create New Note
          </>
        )}
      </h2>
      {children}
    </div>
  );
};

export default FormCard;
