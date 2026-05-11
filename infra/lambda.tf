data "archive_file" "contact" {
  type        = "zip"
  source_dir  = "${path.module}/../workers/contact"
  output_path = "${path.module}/contact.zip"
}

resource "aws_lambda_function" "contact" {
  function_name    = "${var.project}-${var.environment}-contact"
  role             = aws_iam_role.contact.arn
  runtime          = "python3.12"
  handler          = "handler.handler"
  filename         = data.archive_file.contact.output_path
  source_code_hash = data.archive_file.contact.output_base64sha256
  timeout          = 10
  memory_size      = 256

  environment {
    variables = {
      LEADS_TABLE = aws_dynamodb_table.leads.name
    }
  }
}

resource "aws_lambda_function_url" "contact" {
  function_name      = aws_lambda_function.contact.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = false
    allow_origins     = var.frontend_origins
    allow_methods     = ["POST"]
    allow_headers     = ["content-type"]
    max_age           = 600
  }
}
