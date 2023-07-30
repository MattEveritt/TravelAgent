grep -r '@ts-expect-error' -h ./src | # Find all lines containing "@ts-expect-error"
 sed -E 's/^.*\/[*/] | \*\/|,//g' | # Remove whitespace and brackets
 wc -l # Count number of lines 