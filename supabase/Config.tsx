import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://kgvqljibpxqeixbstagv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndnFsamlicHhxZWl4YnN0YWd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMjU5MjUsImV4cCI6MjA2NzcwMTkyNX0.Ce5n3sQQZ09R9gU2qxPCNSBWc4rBPXgnef2JgurNNIg')