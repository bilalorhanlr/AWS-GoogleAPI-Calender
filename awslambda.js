import { google } from 'googleapis';

export const handler = async (event) => {
  return new Promise((resolve, reject) => {
    const access_token = event.pathParameters.access_token;
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials({ access_token });
    
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    calendar.events.list(
      {
        calendarId: 'primary',
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          reject({ statusCode: 500, message: error.message });
        } else {
          resolve({
            statusCode: 200,
            body: JSON.stringify({ events: response.data.items }),
          });
        }
      }
    );
  }).then((results) => {
    return results;
  }).catch((error) => {
    console.error('Error fetching calendar events:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  });
};
