-- PostgreSQL Database Setup for Matcha Log
-- Run this in pgAdmin or your PostgreSQL client

-- Create database (if it doesn't exist)
CREATE DATABASE matcha_log;

-- Connect to the database
\c matcha_log;

-- The TypeORM will automatically create tables when the app starts
-- Tables that will be created:
-- - matcha (id, name, brand, origin, grade, price, description)
-- - tasting_note (id, matchaId, flavorRating, aromaRating, textureRating, overallRating, notes, dateOfTasting, brewingTemperature, brewingMethod)

-- Check if database was created successfully
SELECT 'Database setup complete!' as status;
