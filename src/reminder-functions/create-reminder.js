export const handleCreateReminder = async (data) => {
  try {
    const response = await fetch('https://localhost:7176/Home/CreateReminder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error creating reminder:', error);
  }
};