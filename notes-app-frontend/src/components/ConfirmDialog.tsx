import Swal from 'sweetalert2';

export const confirmDelete = async (title = 'Delete?', message = 'Are you sure?'): Promise<boolean> => {
  const result = await Swal.fire({
    title: title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });
  return result.isConfirmed;
};

export default confirmDelete;
