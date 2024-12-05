export const handleSaveReminder = async (id) => {
    try {
      
      console.log(id);
  
      const response = await fetch('https://localhost:7176/Home/ToggleSaveReminder', {
        method: 'POST',
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
      console.error('Error toggling save reminder:', error);
    }
  };