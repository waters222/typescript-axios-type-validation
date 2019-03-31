docker run --rm -v ${PWD}:/local  openapitools/openapi-generator-cli generate --skip-validate-spec \
    -i /local/petstore.yaml \
    -t /local/templates \
    -g typescript-axios \
    -o /local/out/typescript-axios
