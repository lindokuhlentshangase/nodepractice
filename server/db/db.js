import { Pool } from "pg"

const pool = new Pool({
    "previewLimit": 50,
  "server": "localhost",
  "port": 5432,
  "driver": "PostgreSQL",
  "name": "nodepractice",
  "database": "nodepractice",
  "username": "postgres",
  "password": ""
})

export {pool}