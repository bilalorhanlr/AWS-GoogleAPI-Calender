import axios from 'axios';

export const getAccessToken = async (event) => {

};

export const getCalendarEvents = async (event) => {
  const { access_token } = event.pathParameters;

  if (!access_token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Access token is missing' }),
    };
  }

  try {
    const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data), 
    };
  } catch (error) {
    console.error('Takvim olaylarını alırken hata oluştu:', error.response?.data || error.message);
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
