export const handleSearchReminders = async (userId, searchInput) => {
    try {
      const response = await fetch(`https://localhost:7176/Home/SearchReminders?user_id=${userId}&searchInput=${encodeURIComponent(searchInput)}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      return data.reminders;
      
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return []; 
    }
  };