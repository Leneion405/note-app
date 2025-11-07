import { useState, useEffect } from 'react';
import { getNotes, createNote, updateNote, deleteNote } from '../utils/api';
import type { INote } from '../types';
import Header from '../components/Header'
import NoteCard from '../components/NoteCard';
import FormCard from '../components/FormCard';
import { MdAdd, MdEdit, MdClose } from 'react-icons/md';
import { showToast } from '../utils/toast';
import confirmDelete from '../components/ConfirmDialog'
const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string>('');
  const [fetchLoading, setFetchLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async (): Promise<void> => {
    try {
      setFetchLoading(true);
      const data = await getNotes();
      setNotes(data);
      setError('');
    } catch (err: any) {
      setError('Failed to fetch notes');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleAddOrUpdateNote = async (e: React.FormEvent): Promise<void> => {
  e.preventDefault();

  if (!title.trim() || !content.trim()) {
    showToast.error('Please fill in all fields');
    return;
  }

  try {
    if (editingId) {
      await updateNote(editingId, title, content);
      showToast.success('Note updated successfully!');
      setEditingId(null);
    } else {
      await createNote(title, content);
      showToast.success('Note created successfully!');
    }
    setTitle('');
    setContent('');
    
    fetchNotes();
  } catch (err: any) {
    showToast.error(err.response?.data?.message || 'Failed to save note');
  }
};


  const handleDeleteNote = async (id: string): Promise<void> => {
    const confirmed = await confirmDelete(
      'Delete Note?',
      'This action cannot be undone. Are you sure you want to delete this note?'
    );

    if (!confirmed) return;

    try {
      await deleteNote(id);
      showToast.success('Note deleted!');
      await fetchNotes();
    } catch (err: any) {
      showToast.error('Failed to delete note');
    }
  };

  const handleEditNote = (note: INote): void => {
    setEditingId(note._id);
    setTitle(note.title);
    setContent(note.content);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = (): void => {
    setEditingId(null);
    setTitle('');
    setContent('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header title="My Notes" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-4 rounded-lg flex items-start gap-3">
            <svg
              className="w-5 h-5 text-red-600 mt-0.5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <FormCard isEditing={editingId !== null}>
              <form onSubmit={handleAddOrUpdateNote} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Note title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
                  />
                </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition"
                >
                  {editingId ? (
                    <>
                      <MdEdit size={18} />
                      Update Note
                    </>
                  ) : (
                    <>
                      <MdAdd size={18} />
                      Create Note
                    </>
                  )}
                </button>
                {editingId && (
                    <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition"
                    >
                    <MdClose size={18} />
                    Cancel
                    </button>
                )}
                </div>

              </form>
            </FormCard>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                ✍️ Your Notes {notes.length > 0 && <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{notes.length}</span>}
              </h2>
            </div>

            {fetchLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : notes.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-100">
                <svg
                  className="w-12 h-12 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-gray-600 font-medium">No notes yet</p>
                <p className="text-gray-500 text-sm">Create your first note to get started</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {notes.map((note) => (
                  <NoteCard
                    key={note._id}
                    note={note}
                    onEdit={handleEditNote}
                    onDelete={handleDeleteNote}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
