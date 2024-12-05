export const handleChangeCompanyCode = async (userId, companyId) => {
    try {
      
  
      const response = await fetch('https://localhost:7176/User/ChangeCompanyId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "userId": userId,
          "companyId": companyId
      }),
      });
  
      console.log("UserId: "+ userId + ", CompanyId: " + companyId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
  
    } catch (error) {
      console.error('Error changing company code:', error);
    }
  };