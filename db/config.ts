import { defineDb, defineTable, column } from 'astro:db';

const RSVP = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    attending: column.boolean(),
    guests: column.number(),
    dietaryRestrictions: column.text({ optional: true }),
  }
});

export default defineDb({
  tables: { RSVP },
});
