export const handleFetchReminders = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7176/Home/GetRemindersByUserId?user_id=${userId}`);
      
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
  
  export const handleFetchSavedReminders = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7176/Home/GetSavedRemindersByUserId?user_id=${userId}`);
      
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

  export const handleFetchCompanyReminders = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7176/Home/GetRemindersByCompany?user_id=${userId}`);
      
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