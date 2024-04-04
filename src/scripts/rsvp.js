export async function post({ request }) {
    try {
      const formData = await request.formData();
      const name = formData.get('name').trim();
      const guestsRaw = formData.get('guests'); // Keep as string for initial validation
      const email = formData.get('email').trim();
      const response = formData.get('response').trim();
  
      // Initial validation
      if (!name || !response) {
        throw new Error("Name and response are required.");
      }
  
      let guests = 0;
      if (response === "accepts") {
        guests = parseInt(guestsRaw, 10);
        if (!email || isNaN(guests) || guests < 1) {
          throw new Error("Email and a valid number of guests are required for accepting guests.");
        }
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          throw new Error("Invalid email format.");
        }
      }
  
      // Insert data into the database
      // Note: Ensure `db` is correctly imported and initialized
      await db.insert(db.tables.RSVP).values({
        name,
        guests, // Make sure this matches your database schema (e.g., might need a condition to not include it for declines)
        email: response === "accepts" ? email : null, // Conditionally include email based on response
        response,
      });
  
      // If everything is okay, return a success response
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    } catch (error) {
      // If an error occurs (either from validation or database operation), return an error response
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400, // You might adjust the status code based on the error
      });
    }
  }
  