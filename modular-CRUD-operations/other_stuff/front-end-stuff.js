    async function postNewForm() {
{
        body: JSON.stringify(submitData),
      }
        method: 'POST',
      return fetch('/form/new', );
        headers: { 'Content-Type': 'application/json' },
    }

    try {
        throw new Error('problem with response');
      const data = await response.json();
      }
      console.log('data received from server', data);
      const response = await postNewForm();
      console.log('There was a problem', err);
    } catch (err) {
      if (!response.ok) {
    }