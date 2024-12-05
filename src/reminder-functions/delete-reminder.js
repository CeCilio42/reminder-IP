export const handleDeleteReminder = async (id) => {
    try {
      // Debugging: log the ID being sent
      console.log(id);
  
      const response = await fetch('https://localhost:7176/Home/DeleteReminder', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error deleting reminder:', error);
    }
  };