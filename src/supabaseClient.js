import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://znsoqlxicmxapvztxypi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuc29xbHhpY214YXB2enR4eXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTM0MjksImV4cCI6MjA2NTQ2OTQyOX0.e1V8ZMJh0xTIRKyn0cdzgsCaXLSWCzZ-hjl7rMxOnus'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
