import { Router, Request, Response } from 'express';
import Note from '../models/note';
import authMiddleware from '../middleware/auth';

const router = Router();

router.use(authMiddleware);

// Create note
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content } = req.body;
    const userId = req.userId;

    if (!title || !content) {
      res.status(400).json({ message: 'Title and content required' });
      return;
    }

    const note = new Note({
      title,
      content,
      userId,
    });

    await note.save();
    res.status(201).json(note);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
});

// Get all notes for logged-in user
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.userId;
    const notes = await Note.find({ userId }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
});

// Update note
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.userId;

    const note = await Note.findById(id);

    if (!note) {
      res.status(404).json({ message: 'Note not found' });
      return;
    }

    if (note.userId.toString() !== userId) {
      res.status(403).json({ message: 'Not authorized' });
      return;
    }

    note.title = title || note.title;
    note.content = content || note.content;
    note.updatedAt = new Date();

    await note.save();
    res.json(note);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
});

// Delete note
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const note = await Note.findById(id);

    if (!note) {
      res.status(404).json({ message: 'Note not found' });
      return;
    }

    if (note.userId.toString() !== userId) {
      res.status(403).json({ message: 'Not authorized' });
      return;
    }

    await Note.findByIdAndDelete(id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ message: errorMessage });
  }
});

export default router;
