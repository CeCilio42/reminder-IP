const BASE_URL = process.env.REACT_APP_API_URL;

export const changeCompanyCode = async (userId, companyId, password) => {
  try {
    const response = await fetch(`${BASE_URL}/User/ChangeCompanyId`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, companyId, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error changing company code:', error);
    throw error;
  }
}; 