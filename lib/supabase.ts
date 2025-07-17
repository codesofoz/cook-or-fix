import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vqyykvqmzwcycxuoleth.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxeXlrdnFtendjeWN4dW9sZXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2OTE1ODEsImV4cCI6MjA2ODI2NzU4MX0.T2as_0I4ZsTxTniueLVnC26uYNFDt4gHrbJuOJKAm70';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
