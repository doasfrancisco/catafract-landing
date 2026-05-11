# Nia sources for catafract

## Rules

- **Never pipe `nia` output through `head -N` or `tail -N`.** The output can be 2000+ lines. You MUST read ALL of it. If the output is split across chunks, read every chunk before proceeding. Missing a single source leads to wrong follow-up searches and wasted user time.
- **If the source is a package/library, always ask how to install it** (pip name, Python/Node version, any extras). E.g. `"how do I install X - pip name, python version, async extras?"`

## Sources

| Dep | Nia identifier | Type |
|---|---|---|
| `kapso` | `https://docs.kapso.ai` | documentation |
| `aws-cli` | `aws/aws-cli` | repository |
| `terraform-provider-aws` | `hashicorp/terraform-provider-aws` | repository |
| `next.js` | `https://nextjs.org/docs` | documentation |
| `aws-docs` | `https://docs.aws.amazon.com/` | documentation |
| `entire-cli` | `entireio/cli` | repository |
| `entire-skills` | `entireio/skills` | repository |
| `logfire` | `pydantic/logfire` | repository |
| `fastapi` | `fastapi/fastapi` | repository |
| `claude-platform` | `https://platform.claude.com/docs/en/` | documentation |
| `anthropic-sdk-python` | `anthropics/anthropic-sdk-python` | repository |
| `openrouter-python-sdk` | `OpenRouterTeam/python-sdk` | repository |
| `supabase` | `https://supabase.com/docs` | documentation |

## Examples

```bash
nia search query "send WhatsApp template message" --docs "https://docs.kapso.ai"
nia search query "phone number verification" --docs "https://docs.kapso.ai"
nia sources resolve "https://docs.kapso.ai" --type documentation
nia sources tree <UUID>
nia sources grep <UUID> "webhook"

nia sources resolve "https://platform.claude.com/docs" --type documentation
nia sources tree <UUID>
nia sources read <UUID> build-with-claude/prompt-caching.md
nia sources grep <UUID> "cache_control"
```

### Multi-source query

```bash
# Example
nia search query "WhatsApp template approval flow" \
  --docs "https://docs.kapso.ai,https://platform.claude.com/docs"
```
