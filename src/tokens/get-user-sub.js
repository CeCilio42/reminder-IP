const { user, getAccessTokenSilently } = useAuth0();
const [reminders, setReminders] = useState([]);

useEffect(() => {
  const fetchReminders = async () => {
    try {
      const token = await getAccessTokenSilently();
      const userId = user.sub; // Assuming user.sub contains the user ID
      const reminders = await handleFetchReminders(userId);
      setReminders(reminders);
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  };

  fetchReminders();
}, [getAccessTokenSilently, user]);