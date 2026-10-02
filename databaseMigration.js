/*
Database Migration
Given two js database objects, return the second object with any missing properties from the first filled in.
Fields that already exist in the record are not overwritten.
*/

function migrateRecord(schema, record) {
  for (const property in schema) {
    if (!(property in record)) {
      record[property] = schema[property];
    }
  }

  return record;
}

