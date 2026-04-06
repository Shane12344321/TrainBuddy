import re

with open('scripts/app.js', 'r') as f:
    content = f.read()

# remove seedDemoData function
content = re.sub(r'function seedDemoData\(\) \{.*?\n    \}\n', '', content, flags=re.DOTALL)

with open('scripts/app.js', 'w') as f:
    f.write(content)
