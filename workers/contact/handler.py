import json
import os
import uuid
from datetime import datetime, timezone

import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["LEADS_TABLE"])


def _response(status, body):
    return {
        "statusCode": status,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(body),
    }


def handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method", "")
    if method != "POST":
        return _response(405, {"error": "method not allowed"})

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return _response(400, {"error": "invalid json"})

    name = (body.get("name") or "").strip()
    email = (body.get("email") or "").strip()
    message = (body.get("message") or "").strip()
    company = (body.get("company") or "").strip()

    if not name or not email or not message:
        return _response(400, {"error": "name, email and message are required"})
    if len(name) > 200 or len(email) > 200 or len(company) > 200 or len(message) > 5000:
        return _response(400, {"error": "field too long"})

    lead_id = str(uuid.uuid4())
    headers = event.get("headers", {}) or {}

    table.put_item(Item={
        "id": lead_id,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "name": name,
        "email": email,
        "company": company,
        "message": message,
        "user_agent": headers.get("user-agent", ""),
        "referer": headers.get("referer", ""),
    })

    return _response(200, {"ok": True, "id": lead_id})
