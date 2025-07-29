import { createClient } from '@supabase/supabase-js'

const URL = 'https://qgmzcowzguaqfeiptmwi.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnbXpjb3d6Z3VhcWZlaXB0bXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTY0OTksImV4cCI6MjA2ODg5MjQ5OX0.ybCxiJsZglc9qEcVlBJnOVl_poSz4UYsg-fHWOK_CIA'


export const supabase = createClient(URL, API_KEY)

