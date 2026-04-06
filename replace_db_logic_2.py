import re

with open('scripts/app.js', 'r') as f:
    content = f.read()

# Replace getJourneys & saveJourneys so they are completely removed
content = re.sub(r'function getJourneys\(\) \{.*?\}\n', '', content, flags=re.DOTALL)
content = re.sub(r'function saveJourneys\(journeys\) \{.*?\}\n', '', content, flags=re.DOTALL)

with open('scripts/app.js', 'w') as f:
    f.write(content)
