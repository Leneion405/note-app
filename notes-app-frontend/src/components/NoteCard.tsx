import type { INote } from '../types';
import { MdEdit, MdDelete } from 'react-icons/md';

interface NoteCardProps {
  note: INote;
  onEdit: (note: INote) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {note.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {note.content}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">
            {formatDate(note.createdAt)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(note)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition"
            >
              <MdEdit size={16} />
              Edit
            </button>
            <button
              onClick={() => onDelete(note._id)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition"
            >
              <MdDelete size={16} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
