import { defineDb, defineTable, column } from 'astro:db';

const RSVP = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    guests: column.number(),
    email: column.text(),
    response: column.text(),
  }
});

export default defineDb({
  tables: { RSVP },
});
