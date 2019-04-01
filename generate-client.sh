#!/usr/bin/env bash
docker run --rm -v ${PWD}:/local  openapitools/openapi-generator-cli generate --skip-validate-spec \
    -i /local/sample.yaml \
    -t /local/templates \
    -g typescript-axios \
    -o /local/out/typescript-axios
