output "contact_function_url" {
  description = "Public URL of the contact Lambda. Set VITE_CONTACT_API to this value in the frontend .env."
  value       = aws_lambda_function_url.contact.function_url
}

output "leads_table_name" {
  description = "DynamoDB table holding submitted leads"
  value       = aws_dynamodb_table.leads.name
}
