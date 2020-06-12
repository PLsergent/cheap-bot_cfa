## Report

### Compile 
```
# Static
pandoc report.md -V geometry:margin=1.25in -o report.pdf

# Dynamic (watch for changes on the report.md file)
echo report.md | entr pandoc report.md -V geometry:margin=1.25in -o report.pdf
```
