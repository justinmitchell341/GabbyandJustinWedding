export async function post({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const guests = formData.get('guests');
    const email = formData.get('email');
    const response = formData.get('response');
  
    // Optional: Add validation logic here
  
    try {
      await db.insert(db.tables.RSVP).values({
        name,
        guests: parseInt(guests, 10),
        email,
        response,
      });
  
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      });
    }
  }
  