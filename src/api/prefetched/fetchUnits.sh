#!/bin/bash

# API URL
API_URL="https://apiv2.legiontd2.com/units/byVersion/11.03.6?limit=25"

# API key
API_KEY=$API_KEY

# Output JSON file
OUTPUT_FILE="units.json"

# Fetch the data and save to a JSON file
curl -H "x-api-key: $API_KEY" $API_URL -o $OUTPUT_FILE
