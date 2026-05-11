variable "project" {
  description = "Project name used as prefix for resource names"
  type        = string
  default     = "catafract"
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "Named profile from ~/.aws/credentials used to authenticate Terraform against AWS"
  type        = string
  default     = "default"
}

variable "environment" {
  description = "Environment name (used as a tag and resource-name suffix)"
  type        = string
  default     = "prod"
}

variable "frontend_origins" {
  description = "Origins allowed by the contact Lambda Function URL CORS"
  type        = list(string)
  default     = ["http://localhost:5173"]
}
