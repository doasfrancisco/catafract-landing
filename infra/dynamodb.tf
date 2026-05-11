resource "aws_dynamodb_table" "leads" {
  name         = "${var.project}-${var.environment}-leads"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }
}
